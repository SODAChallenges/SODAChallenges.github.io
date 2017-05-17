import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const categories = this._categoriesWithCount(opts.datasets, opts.params)
    const categoriesMarkup = categories.map(TmplListGroupItem)
    setContent(opts.el, categoriesMarkup)
    collapseListGroup(opts.el)
  }

  // Given an array of datasets, returns an array of their categories with counts
  _categoriesWithCount (datasets, params) {
    return chain(datasets)
      .filter('challenge_category')
      .flatMap(function (value, index, collection) {
        // Explode objects where category is an array into one object per category
        if (typeof value.challenge_category === 'string') return value
        const duplicates = []
        value.challenge_category.forEach(function (challenge_category) {
          duplicates.push(defaults({challenge_category: challenge_category}, value))
        })
        return duplicates
      })
      .groupBy('challenge_category')
      .map(function (datasetsInCat, challenge_category) {
        const filters = createDatasetFilters(pick(params, ['organization','category']))
        const filteredDatasets = filter(datasetsInCat, filters)
        const challenge_categorySlug = slugify(challenge_category)
        const selected = params.challenge_category && params.challenge_category === challenge_categorySlug
        const itemParams = selected ? omit(params, 'challenge_category') : defaults({challenge_category: challenge_categorySlug}, params)
        return {
          title: challenge_category,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsInCat.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
