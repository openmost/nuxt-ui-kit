<template>
  <footer id="tool-footer">
    <div class="container">

      <div class="footer-wrapper">
        <div class="footer-start">

          <LogoOpenmostCombinationWhite/>

          <span>&copy; {{ date }} Openmost. All rights reserved.</span>

        </div>


        <div class="footer-end">

          <span>Made by Ronan HELLO</span>

          <nav>
            <ul class="footer-menu">
              <li>
                <a href="https://openmost.io/privacy" target="_blank" rel="noopener">Privacy</a>
              </li>
              <li>
                <a href="https://openmost.io/terms" target="_blank" rel="noopener">Terms</a>
              </li>
            </ul>
          </nav>

        </div>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
#tool-footer {
  margin-top: 50px;
  padding: 1.5rem 0;
  font-size: 1rem;
  line-height: normal;
}

.footer-wrapper {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  .footer-start {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .footer-end {
    display: flex;
    gap: .75rem;
    flex-wrap: wrap;

    .footer-menu {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;
      font-weight: 300;
      display: flex;
      gap: .75rem;
      flex-wrap: wrap;

      li {
        display: flex;
        gap: .75rem;
        align-items: center;

        &:before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          background-color: var(--bs-primary);
          border-radius: 4px;
        }

        a {
          font-weight: 300;
          color: inherit;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
const date = new Date().getFullYear();
</script>
