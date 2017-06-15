# SODA 苏打数据平台

SODA苏打数据平台是基于JKAN建立的一个链接数据、问题、解决方案的新型数据平台，用于SODA赛事的支撑和长效社群civic hacking活动。


# 添加数据
根据数据之间的关联关系，添加数据最好按照 `organization -> challenge -> dataset -> project`这样的顺序添加。按照该方式添加，只存在后面的属性与前面的数据保持一致的情况，不存在前后交叉关联，防止结构混乱。标亮的部分很重要，有数据关联的属性点和其他信息。

### 添加organization数据
|属性名|类型|说明|
|:----    |:---|:----- |
|title |string |组织机构名称 |
|description |string  |组织机构描述 |
|logo     |url  |组织机构的图标地址 |

保存为`.md`格式的数据文件，使用组织机构名称(即title属性)命名。

### 添加challenge数据

|属性名|类型|说明|
|:----    |:---|:----- |
|title |string |城市问题名称 |
|description |string  |城市问题介绍、描述 |
|goals     |list  |城市问题的目标 |
|schedule     |list  |该challenge的关键时间节点，每个时间节点包含name(节点名称), date(节点时间) |
|prize     |list  |该challenge的奖项设立，每个奖项包含title(奖项名称), count(候选人数), award(奖金)|
|year     |string  |challenge的年份 |
|cop_organization     |list  |城市问题的合作机构，每个合作机构包含name(机构名称), logo(机构图标)。`name(机构名称)与组织机构数据关联，确保填写无误，与组织机构名称和组织机构的markdown数据文件名一致。` |
|mentors     |list  |问题的导师信息，包含name(导师姓名), photo(导师照片), intro(导师介绍) |
|references     |list  |问题的参考资料，包含name(资料名称), link(资料的超链接) |
|challenge_category_chn     |string  |问题所属板块的中文名 |
|challenge_category_en     |string  |问题所属板块的英文名 |
|challenge_category_logo     |string  |问题所属板块的logo |
|challenge_org_logo     |string  |问题合作机构的logo。`此logo和cop_organization中的logo不同，此处是栅格展示列表的白色透明底png格式logo。cop_organization中的logo是问题详情页左栏中，问题建设单位里的logo。 `|

保存为`.md`格式的数据文件，使用城市问题名称命名。

### 添加dataset数据
|属性名|类型|说明|
|:----    |:---|:----- |
|schema |string |默认schema |
|title |string  |数据集名称 |
|organization     |string  |数据提供组织机构的名称。`与组织机构名称和组织机构的markdown数据文件名一致。` |
|notes     |string  |数据集的简单介绍、备注 |
|resources     |list  |数据集数据源，包含name(数据名), url(数据文件链接), format(数据文件格式) |
|challenges     |list  |`数据关联的城市问题，包含name(城市问题名), link(城市问题链接)。其中name与城市问题的title属性一致，link为 /challenges/${城市问题文件名} 的形式。` |
|challenge_category     |list  |数据从属的板块列表，中文名 |
|category     |list  |数据从属的类别，jkan自带的类别 |
|maintainer     |string  |数据维护者(联系人)姓名 |
|maintainer_email     |string  |数据维护者(联系人)邮箱 |

保存为`.md`格式的数据文件，建议使用数据集名称命名。


### 添加project数据
|属性名|类型|说明|
|:----    |:---|:----- |
|title |string |解决方案的项目名称 |
|team_name |string  |项目的团队名称 |
|team_members     |list  |团队成员信息，包含name(姓名), photo(头像照片), school(学校名) |
|team_description |string  |项目的团队介绍 |
|description |string  |项目的介绍|
|award |string  |`获奖情况，值1st/2nd/3rd/no，列表筛选页使用` |
|year |string  |项目的年份 |
|datasets |list  |`项目用到的数据集，每个数据集包含name(数据集名称), link(数据集详情页链接)。其中name与数据集的title一致，link为 /datasets/${数据集文件名} 的形式 `|
|docs |list  |项目文档，包含name(文档名称), file(文档文件连接) |
|challenge_name |string  |`项目的解决城市问题的名称，与城市问题的title属性保持一致。` |
|challenge_category |string  |`项目解决的城市问题所属板块，英文名。解决方案筛选控件，根据该属性进行板块筛选。 `|
|logo |url  |项目图标，用于栅格展示时使用。 |

保存为`.md`格式的数据文件，建议使用解决方案名称命名。