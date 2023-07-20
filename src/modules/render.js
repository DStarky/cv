import { i18n } from "./i18n"




export default() => {
return `
<h1>${i18n.t('title')}</h1>
<ul>
<li>${i18n.t('skills.education')}</li>
<li>${i18n.t('skills.experience')}</li>
<li>${i18n.t('skills.skills')}</li>
<li>${i18n.t('skills.projects')}</li>
<li>${i18n.t('skills.cources')}</li>
<li>${i18n.t('skills.contacts')}</li>
<li>${i18n.t('skills.about')}</li>
</ul>
<br>

`

}