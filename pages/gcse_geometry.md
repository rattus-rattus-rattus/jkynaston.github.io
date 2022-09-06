---
title: GCSE Geometry Resources
permalink: /gcse_geometry/
cover-img: "/assets/img/geometry.jpg"
layout: hub
---

{% for page in site.gcse_geometry %}
<h3><a href="{{ page.url }}">{{ page.title }}</a></h3>
<p>{{ page.content | markdownify }}</p>
{% endfor %}