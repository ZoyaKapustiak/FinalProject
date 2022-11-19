const product = {
  props: ['img', 'product', 'text'],
  template: `
    <div class="product" data-id='1' data-name='ELLERY X M O CAPSULE' data-price='48'>
      <img class="product__img" :src="img" alt="photo">
      <div class="product__content">
        <a href="product.html" class="product__item__text">{{ product.product_name }}</a>
        <p class="product__content__text">
            {{product.product_text}}
        </p>
        <p class="product__content__price">$ {{ product.price }}</p>
      </div>
      <a href="#" class="product__add" @click="$root.$refs.cart.addProduct(product)">
        Add to Cart</a>
    </div>
  `
}

const products = {
  components: {
    product
  },
  data() {
    return {
      products: [],
      filtered: []
    }
  },
  mounted() {
    this.$parent.getJson('/api/products')
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      });
  },
  methods: {
    filter(val) {
      const regExp = new RegExp(val, 'i');
      this.filtered = this.products.filter(el => regExp.test(el.product_name))
    },
  },
  template: `
    <div class = "product__box__content center">
      <product v-for="product of filtered"
      :key="product.product_id"
      :img="product.img_product"
      :text="product.product_text"
      :product="product"></product> 
    </div>
  `
}