---
#
---
{%- assign items = site.data[site.metadata] | where_exp: 'item','item.objectid' -%}
{%- assign fields = site.data.config-browse -%}
/* add items */
var items = [
    {% for i in items %}
    { "title":{{ i.title | strip | escape | jsonify }}, {% for f in fields %}{% if i[f.field] %}{{ f.field | escape | jsonify }}:{{ i[f.field] | strip | escape | jsonify }},{% endif %}{% endfor %} "id":{{ i.objectid | jsonify }} }{% unless forloop.last %},{% endunless %}{% endfor %}
];