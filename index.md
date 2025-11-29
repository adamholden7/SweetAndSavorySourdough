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
<section id="menu" class="section menu-section">
  <div class="container">
    <header class="section-header menu-header">
      <p class="menu-eyebrow">
        {{ site.data.client.business_name | default: "Sweet & Savory Sourdough" }}
      </p>
      <h2 class="menu-title-script">
        {{ site.data.client.seasonal_menu_title | default: "Seasonal Menu" }}
      </h2>
      <p class="menu-subtitle">Pre-order sourdough and desserts for your table.</p>
    </header>

    <div class="menu-card">
      <div class="menu-inner">
        <h3 class="menu-category">Sourdough Bread</h3>
        <ul class="menu-list">
          <li class="menu-item">
            <span class="menu-item-name">Cranberry Walnut</span>
            <span class="menu-item-price">$12</span>
          </li>
          <li class="menu-item">
            <span class="menu-item-name">Cinnamon Maple Pecan</span>
            <span class="menu-item-price">$12</span>
          </li>
          <li class="menu-item">
            <span class="menu-item-name">Apple Cider Donut <span class="menu-item-note">(loaf style only)</span></span>
            <span class="menu-item-price">$12</span>
          </li>
        </ul>

        <h3 class="menu-category">Desserts</h3>
        <ul class="menu-list">
          <li class="menu-item">
            <span class="menu-item-name">Cranberry Bars</span>
            <span class="menu-item-price">6/$15 · 12/$28</span>
          </li>
          <li class="menu-item">
            <span class="menu-item-name">Pumpkin Coffee Cake Muffins</span>
            <span class="menu-item-price">6/$16 · 12/$28</span>
          </li>
          <li class="menu-item">
            <span class="menu-item-name">Oatmeal Cream Pies</span>
            <span class="menu-item-price">6/$15 · 12/$28</span>
          </li>
          <li class="menu-item">
            <span class="menu-item-name">Jumbo Cinnamon Rolls</span>
            <span class="menu-item-price">6/$20 · 12/$35</span>
          </li>
        </ul>

        <div class="menu-footer">
          <p class="menu-contact">
            {{ site.data.client.business_name | default: "Sweet & Savory Sourdough" }} ·
            <a href="tel:{{ site.data.client.phone | replace: '-', '' | replace: ' ', '' }}">
              {{ site.data.client.phone }}
            </a>
            · text or call to order
          </p>
          <p class="menu-note">
            {{ site.data.client.seasonal_menu_note | default: "All orders must be picked up during the specified pick-up window." }}
          </p>
        </div>
      </div>
    </div>
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
