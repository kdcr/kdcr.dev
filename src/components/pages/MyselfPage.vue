<script setup lang="ts">
  import linkedinLogo from '@/assets/images/logos/linkedin.png'
  import githubLogo from '@/assets/images/logos/github.png'
  import instagramLogo from '@/assets/images/logos/instagram.png'
</script>

<template>
  <div id="presentation">
    <div>
      <h3>Hi!</h3>
      <span>
        I'm Kevin, and I welcome you to my personal webpage, right now is a work
        in progress, but I will post here new photos I take and the projects I
        participate in.
      </span>
      <br />
      <span>
        In the meantime, you can follow me on social media to know when this
        little project is finished!
      </span>
      <br />
      <span>
        You can also check out some photos I took on my instagram page!
      </span>
    </div>
    <div id="media-links">
      <a
        href="https://www.linkedin.com/in/kdcr"
        target="_blank"
        rel="noopener noreferrer"
        ><img class="logo" :src="linkedinLogo"
      /></a>
      <a
        href="https://github.com/kdcr"
        target="_blank"
        rel="noopener noreferrer"
        ><img class="logo" :src="githubLogo"
      /></a>
      <a
        href="https://www.instagram.com/kevin__dcr/"
        target="_blank"
        rel="noopener noreferrer"
        ><img class="logo" :src="instagramLogo"
      /></a>
    </div>
  </div>
</template>

<style scoped lang="less">
  #presentation {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  #media-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }

  .logo {
    width: 40px;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
</style>
