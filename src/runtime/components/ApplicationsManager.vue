<template>
  <div class="applications-manager">
    <Button circle @click="open = !open">
      <template #icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 7C6.10455 7 7 6.10455 7 5C7 3.89543 6.10455 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10455 3.89543 7 5 7Z"
            fill="white"/>
          <path
            d="M12 7C13.1045 7 14 6.10455 14 5C14 3.89543 13.1045 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10455 10.8954 7 12 7Z"
            fill="white"/>
          <path
            d="M19 7C20.1045 7 21 6.10455 21 5C21 3.89543 20.1045 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10455 17.8954 7 19 7Z"
            fill="white"/>
          <path
            d="M5 14C6.10455 14 7 13.1045 7 12C7 10.8954 6.10455 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1045 3.89543 14 5 14Z"
            fill="white"/>
          <path
            d="M12 14C13.1045 14 14 13.1045 14 12C14 10.8954 13.1045 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1045 10.8954 14 12 14Z"
            fill="white"/>
          <path
            d="M19 14C20.1045 14 21 13.1045 21 12C21 10.8954 20.1045 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1045 17.8954 14 19 14Z"
            fill="white"/>
          <path
            d="M5 21C6.10455 21 7 20.1045 7 19C7 17.8954 6.10455 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1045 3.89543 21 5 21Z"
            fill="white"/>
          <path
            d="M12 21C13.1045 21 14 20.1045 14 19C14 17.8954 13.1045 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1045 10.8954 21 12 21Z"
            fill="white"/>
          <path
            d="M19 21C20.1045 21 21 20.1045 21 19C21 17.8954 20.1045 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1045 17.8954 21 19 21Z"
            fill="white"/>
        </svg>
      </template>
    </Button>

    <ul class="applications-manager-list" v-if="open">
      <li v-for="application in applications">
        <a :href="application.url">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.99997 20C2.23856 20 0 22.2386 0 25C0 27.7614 2.23856 29.9999 4.99997 29.9999H25C27.7614 29.9999 30 27.7614 30 25C30 22.2386 27.7614 20 25 20H4.99997ZM25 20.7143C22.6331 20.7143 20.7143 22.633 20.7143 24.9999C20.7143 27.3669 22.6331 29.2856 25 29.2856C27.3669 29.2856 29.2857 27.3669 29.2857 24.9999C29.2857 22.633 27.3669 20.7143 25 20.7143Z"
                  fill="#FFA32A"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M28.4723 1.53189C30.4152 3.47622 30.4149 6.62715 28.4717 8.57116L8.52859 28.5226C7.59499 29.4566 6.32955 29.9829 5.00897 29.9865L4.8985 29.9868C2.19527 29.9941 -1.63603e-06 27.8047 0 25.1015V0C5.52285 0 10 4.47716 10 10V12.9359L21.4334 1.52683C23.3789 -0.414549 26.5296 -0.412286 28.4723 1.53189Z"
                  fill="#426CDA"/>
          </svg>
          <span>{{ application.name }}</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<script setup>
import {ref} from "@vue/runtime-core";

const applications = ref([
  {
    "slug": "url-builder",
    "name": "URL Builder",
    "url": "https://url-builder.openmost.io"
  },
  {
    "slug": "http-builder",
    "name": "HTTP Builder",
    "url": "https://http-builder.openmost.io"
  },
  {
    "slug": "api-builder",
    "name": "API Builder",
    "url": "https://api-builder.openmost.io"
  },
  {
    "slug": "accounts",
    "name": "My Account",
    "url": "https://accounts.openmost.io"
  },
  {
    "slug": "toolkit",
    "name": "Toolkit",
    "url": "https://toolkit.openmost.io"
  }
]);

const open = ref(false);
</script>

<style lang="scss">
.applications-manager {
  position: relative;
}

.applications-manager-list {
  background-color: var(--bs-secondary);
  border: 1px solid red;
  position: absolute;
  z-index: 2;
  top: calc(40px + .5rem);
  right: 0;
  margin-bottom: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 300px;
  padding: 1rem;

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: inherit;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: .5rem;

      span {
        display: block;
      }
    }
  }
}
</style>
