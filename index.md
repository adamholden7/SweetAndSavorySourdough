---
layout: default
title: Home
description: Small-batch sourdough loaves and treats baked fresh in Hannah's home kitchen in Superior, Wisconsin.
---

<section id="hero" class="hero hero-bakery">
  <div class="hero-overlay"></div>
  <div class="container hero-content">
    <p class="eyebrow">
      {{ site.data.client.tagline | default: "Small-batch sourdough loaves and treats, baked fresh at home." }}
    </p>
    <h1>{{ site.data.client.hero_headline | default: "Slow-Fermented Sourdough, Baked With Care." }}</h1>
    <p class="hero-text">
      {{ site.data.client.hero_subtext | default: "Naturally leavened loaves, focaccia, and sweet sourdough bakes crafted in small batches for maximum flavor and crunch." }}
    </p>
    <div class="hero-actions">
      <a href="#order" class="btn btn-primary">Place an Order</a>
      <a href="#menu" class="btn btn-ghost">View This Week’s Menu</a>
    </div>
    <div class="hero-meta">
      <span>‣ Naturally leavened, long-fermented dough</span>
      <span>‣ Local pick-up in {{ site.data.client.location | default: "your area" }}</span>
      <span>‣ Limited batches for peak freshness</span>
    </div>
  </div>
</section>

<section id="about" class="section">
  <div class="container grid-2">
    <div class="about-text">
      <h2>Meet {{ site.data.client.owner_name | default: "Your Baker" }}</h2>
      <p>
        Hi, I’m <strong>{{ site.data.client.owner_name | default: "Hannah" }}</strong> — a home baker in
        {{ site.data.client.location | default: "your hometown" }} who fell in love with sourdough the slow way:
        one starter, one loaf, and a lot of early-morning bakes.
      </p>
      <p>
        Every loaf is handcrafted using long, cold fermentation for better flavor, texture, and digestibility.
        From classic country loaves to seeded, savory, and sweet bakes, everything is made in small batches so it
        never feels factory-made.
      </p>
      <ul class="feature-list">
        <li>Naturally leavened, no commercial yeast</li>
        <li>Locally milled flour whenever possible</li>
        <li>Simple, transparent ingredients</li>
      </ul>
    </div>
    <div class="about-media">
      <div class="about-card">
        <img src="{{ '/images/baker-portrait.jpg' | relative_url }}" alt="Hannah holding a sourdough loaf" />
      </div>
    </div>
  </div>
</section>

{% if site.data.client.show_menu != false %}
<section id="menu" class="section section-alt menu-store">
  <div class="container menu-layout">
    <div class="menu-products">
      <header class="section-header menu-header">
        <p class="menu-eyebrow">
          {{ site.data.client.business_name | default: "Sweet & Savory Sourdough" }}
        </p>
        <h2>This Week’s Menu</h2>
        <p>Tap “Add to cart” to build your order, then submit it below.</p>
      </header>

      <h3 class="menu-section-title">Sourdough Bread</h3>
      <div class="product-grid">
        <article class="product-card" data-id="cranberry-walnut" data-name="Cranberry Walnut" data-price="12">
          <h4 class="product-name">Cranberry Walnut</h4>
          <p class="product-desc">Tart cranberries and toasted walnuts in a soft, chewy sourdough loaf.</p>
          <p class="product-price">$12</p>
          <button class="btn btn-sm add-to-cart">Add to cart</button>
        </article>

        <article class="product-card" data-id="cinnamon-maple-pecan" data-name="Cinnamon Maple Pecan" data-price="12">
          <h4 class="product-name">Cinnamon Maple Pecan</h4>
          <p class="product-desc">Lightly sweet sourdough with cinnamon, maple, and toasted pecans.</p>
          <p class="product-price">$12</p>
          <button class="btn btn-sm add-to-cart">Add to cart</button>
        </article>

        <article class="product-card" data-id="apple-cider-donut" data-name="Apple Cider Donut (Loaf Style)" data-price="12">
          <h4 class="product-name">Apple Cider Donut (Loaf Style)</h4>
          <p class="product-desc">All the cozy cider donut flavors in a shareable loaf.</p>
          <p class="product-price">$12</p>
          <button class="btn btn-sm add-to-cart">Add to cart</button>
        </article>
      </div>

      <h3 class="menu-section-title">Desserts</h3>
      <div class="product-grid">
        <article class="product-card" data-id="cranberry-bars" data-name="Cranberry Bars (6)" data-price="15">
          <h4 class="product-name">Cranberry Bars</h4>
          <p class="product-desc">Bright, tangy cranberry filling on a buttery base.</p>
          <p class="product-price">6/$15 · 12/$28</p>
          <button class="btn btn-sm add-to-cart" data-alt-price="28" data-alt-label="12/$28">Add 6-pack</button>
        </article>

        <article class="product-card" data-id="pumpkin-muffins" data-name="Pumpkin Coffee Cake Muffins (6)" data-price="16">
          <h4 class="product-name">Pumpkin Coffee Cake Muffins</h4>
          <p class="product-desc">Pumpkin muffins with a cinnamon streusel top.</p>
          <p class="product-price">6/$16 · 12/$28</p>
          <button class="btn btn-sm add-to-cart">Add 6-pack</button>
        </article>

        <article class="product-card" data-id="oatmeal-cream-pies" data-name="Oatmeal Cream Pies (6)" data-price="15">
          <h4 class="product-name">Oatmeal Cream Pies</h4>
          <p class="product-desc">Soft oat cookies sandwiched with vanilla cream.</p>
          <p class="product-price">6/$15 · 12/$28</p>
          <button class="btn btn-sm add-to-cart">Add 6-pack</button>
        </article>

        <article class="product-card" data-id="jumbo-cinnamon-rolls" data-name="Jumbo Cinnamon Rolls (6)" data-price="20">
          <h4 class="product-name">Jumbo Cinnamon Rolls</h4>
          <p class="product-desc">Extra fluffy rolls with plenty of cinnamon and icing.</p>
          <p class="product-price">6/$20 · 12/$35</p>
          <button class="btn btn-sm add-to-cart">Add 6-pack</button>
        </article>
      </div>
    </div>

    <aside class="menu-cart" aria-label="Order summary">
      <h3>Your Cart</h3>
      <p class="cart-empty">No items yet. Add something from the menu.</p>
      <ul id="cart-items" class="cart-items"></ul>
      <p class="cart-total-row">
        <span>Total</span>
        <span id="cart-total">$0</span>
      </p>
      <p class="cart-note">
        This is a pre-order only – you’ll send this cart with your contact details below.
      </p>
    </aside>
  </div>
</section>
{% endif %}


<section id="process" class="section">
  <div class="container grid-2">
    <div>
      <h2>The Sourdough Process</h2>
      <p>
        Every loaf starts with a living sourdough starter that’s fed, cared for, and refreshed daily.
        Doughs are mixed, rested, and shaped by hand, then given a long, cold fermentation overnight.
      </p>
      <p>
        This slow process builds flavor, creates a beautiful open crumb, and makes sourdough easier to digest
        than many store-bought breads.
      </p>
      <ul class="feature-list">
        <li>24–48 hours from mixing to bake</li>
        <li>Hand-shaped and scored</li>
        <li>Baked on stone for a crisp, blistered crust</li>
      </ul>
    </div>
    <div class="river-panel">
      <h3>How Ordering Works</h3>
      <ul class="season-list">
        <li><span>1.</span> Check the weekly menu above.</li>
        <li><span>2.</span> Submit your order request with preferred pick-up day.</li>
        <li><span>3.</span> Get a confirmation email with details &amp; payment options.</li>
      </ul>
      <p class="river-note">
        Bakes are limited each week to keep everything fresh and manageable. If a date is full, I’ll offer the
        next available pick-up day.
      </p>
    </div>
  </div>
</section>

{% if site.data.client.show_gallery != false %}
<section id="gallery" class="section section-alt">
  <div class="container">
    <header class="section-header">
      <h2>From the Oven</h2>
      <p>A peek at some recent loaves and bakes coming out of the kitchen.</p>
    </header>
    <div class="gallery-grid">
      <figure class="gallery-item">
        <img src="{{ '/images/bread-1.jpg' | relative_url }}" alt="Crusty sourdough loaf on a cutting board" />
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/images/bread-2.jpg' | relative_url }}" alt="Sliced sourdough showing open crumb" />
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/images/bread-3.jpg' | relative_url }}" alt="Seeded multigrain sourdough loaf" />
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/images/bread-4.jpg' | relative_url }}" alt="Cinnamon swirl sourdough slices" />
      </figure>
    </div>
  </div>
</section>
{% endif %}

{% if site.data.client.show_testimonials != false %}
<section class="section">
  <div class="container">
    <header class="section-header">
      <h2>What People Are Saying</h2>
    </header>
    <div class="card-grid testimonials">
      <article class="card testimonial">
        <p>“The best sourdough I’ve had in Duluth. Crunchy crust, soft inside, and amazing toasted.”</p>
        <span class="testimonial-name">— Emily W.</span>
      </article>
      <article class="card testimonial">
        <p>“We plan our weekends around Hannah’s loaves now. The cinnamon swirl is dangerous in the best way.”</p>
        <span class="testimonial-name">— Mark &amp; Jenna</span>
      </article>
      <article class="card testimonial">
        <p>“You can taste the care and time in every loaf. It feels like bakery-quality bread out of a home kitchen.”</p>
        <span class="testimonial-name">— Lauren P.</span>
      </article>
    </div>
  </div>
</section>
{% endif %}

{% if site.data.client.show_order_form != false %}
<section id="order" class="section section-accent">
  <div class="container grid-2">
    <div>
      <h2>Place an Order</h2>
      <p>
        Share what you’d like to order, how many loaves, and your preferred pick-up day. I’ll confirm
        availability and follow up with payment details.
      </p>
      <div class="contact-details">
        <p>
          <strong>Email:</strong>
          <a href="mailto:{{ site.data.client.email }}">{{ site.data.client.email }}</a>
        </p>
        <p>
          <strong>Location:</strong>
          {{ site.data.client.location | default: "Local pick-up" }} (address shared upon confirmation)
        </p>
      </div>
    </div>
    <form class="contact-form">
      <div class="form-row">
        <label for="name">Name</label>
        <input id="name" name="name" required />
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div class="form-row">
        <label for="items">What would you like to order?</label>
        <textarea id="items" name="items" rows="3" placeholder="e.g., 1 Classic Country, 1 Seeded Multigrain, 1 Cinnamon Swirl"></textarea>
      </div>
      <div class="form-row form-row-inline">
        <div>
          <label for="pickup-day">Preferred Pick-Up Day</label>
          <input id="pickup-day" name="pickup-day" type="date" />
        </div>
        <div>
          <label for="quantity">Approximate Total Loaves</label>
          <input id="quantity" name="quantity" type="number" min="1" max="10" />
        </div>
      </div>
      <div class="form-row">
        <label for="notes">Notes (allergies, timing, etc.)</label>
        <textarea id="notes" name="notes" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Submit Order Request</button>
    </form>
  </div>
</section>
{% endif %}
