---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: 4e7 Media
---
<div id="home">
  {% include landingpage.html %}
  {% include campaingns-eye.html %}
  {% include features.html %}
  {% include casesindex.html %}
  {% include work.html %}
  {% include plattforms.html %}
  {% include aboutus.html %}
  <div id="press" class="section">
    <div class="fp-bg"><img class="press-title" src="../img/press-title.svg"></div>
      <div id="press-gal">
        {% for img in site.data.press.url %}
        <a class="press-link" href="{{site.cloud_host}}{{img}}">
          <img class="press-img"
            src="{{site.cloud_host}}if_w_gt_h,c_fill,h_180,w_250/if_h_gt_w,c_fill,w_120,h_180/if_h_eq_w,c_fill,w_120,h_180{{img}}">
        </a>
        {% endfor %}
      </div>
   
  </div>
  {% include footer.html %}
</div>
<script>
  $('.press-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });
</script>