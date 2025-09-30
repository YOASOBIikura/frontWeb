<template>
  <div class="mainContainer">

    <header class="desktop">
      <img src="@/assets/svg/procyon-light.svg" class="logo attachment-large size-large" />
      <div class="nav">
        <ul>
          <ul class="language-picker">
            <li :class="state.langEn?'selected':''" @click="handleEn"><span class="language">EN</span></li>
            <li :class="state.langEn?'':'selected'" @click="handleJP"><span class="language">JP</span></li>
          </ul>
        </ul>
      </div>
    </header>

    <div id="main">
      <div class="content">

        <div class="form-container" style="width: 100%;">

          <div class="content-glass" style="width: 100%;">

            <span class="Header-span">
              {{$t('about.title')}}
            </span>

            <div class="Header-line">
            </div>

            <div class="topInfo">
              <span>
                {{$t('about.platform')}}
              </span>

              <span v-if="state.langEn">
                (See the official MAS regulatory update <a href="https://www.reedsmith.com/en/perspectives/2025/06/mas-finalises-clarifies-regulatory-regime-digital-token-service-providers?utm_source=chatgpt.com">here</a>.)
              </span>
              <span v-else>
                (公式のMAS規制アップデートは<a href="https://www.reedsmith.com/en/perspectives/2025/06/mas-finalises-clarifies-regulatory-regime-digital-token-service-providers?utm_source=chatgpt.com">こちら</a>をご覧ください)
              </span>

              <span>
                {{$t('about.we')}}
              </span>

              <span>
                {{$t('about.reassure')}}}
              </span>

              <span>
                {{$t('about.must')}}
              </span>

            </div>

            <div class="fundInfo">
              <span class="fundHeader">
                {{$t('about.funds')}}
              </span>

              <span>
                {{$t('about.mining')}}
              </span>

              <span>
                {{$t('about.process')}}
              </span>
            </div>

            <div class="stepInfo">
              <span class="stepHeader">
                {{$t('about.step1')}}
              </span>

              <span>{{$t('about.ready')}}</span>

              <div class="stepBox">
                <span>{{$t('about.KYC')}}</span>
                <span>{{$t('about.passport')}}</span>
                <span>{{$t('about.withdrawal')}}</span>
              </div>

              <span class="stepHeader">
                {{$t('about.step2')}}
              </span>

              <span>{{$t('about.prepared')}}</span>

              <div class="stepBox">
                <span>{{$t('about.japanese')}}<a href="https://forms.gle/rThPAEXRG2dAu9tE7">https://forms.gle/rThPAEXRG2dAu9tE7</a></span>
                <span>{{$t('about.english')}}<a href="https://forms.gle/jhr99yrbbSSBGp5u7">https://forms.gle/jhr99yrbbSSBGp5u7</a></span>
              </div>

              <span>{{$t('about.forms')}}</span>

              <span class="stepHeader">
                {{$t('about.step3')}}
              </span>

              <div class="stepBox">
                <span>{{$t('about.possible')}}</span>
                <span>{{$t('about.planned')}}</span>
                <span>{{$t('about.submitted')}}</span>
                <span>{{$t('about.times')}}</span>
              </div>

              <span>
                {{$t('about.transfers')}}
              </span>

              <span class="stepHeader">
                {{$t('about.commitment')}}
              </span>

              <span>
                {{$t('about.patience')}}
              </span>

              <span>
                {{$t('about.procyon')}}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>

    <footer>

      <div class="content">

        <div class="columns-4">

          <div class="column-4">
            <img class="logo" src="@/assets/svg/procyon-light.svg">
            <h1>Shoot for the Stars</h1>
            <h4 class="tagline">Your global constellation of cryptocurrencies</h4>
            <p class="copyright">© 2021 PRCN Technology Ltd.</p>
          </div>
        </div>
      </div>

    </footer>
  </div>
</template>

<script setup>

import {reactive, watch} from "vue";
import {useI18n} from "vue-i18n";

const { locale } = useI18n()

const state = reactive({
  langEn: false
})

const handleEn = () => {
  state.langEn = true
}

const handleJP = () => {
  state.langEn = false
}

watch(() => state.langEn, (newVal) => {
  if (newVal){
    locale.value = 'en'
  }else {
    locale.value = 'jp'
  }
})

</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');


*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

::selection {
  background: #1ec498;
  color: #27424c;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: #27424c;
}


html,
body {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  /* 隐藏滚动条但保持滚动功能 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* 隐藏Webkit浏览器的滚动条 */
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
}

.mainContainer{
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1f293a 0, #2a3943 50%, #092023 100%);
  color: #e1eeef;
  display: flex;
  flex-direction: column;
  font-family: 'Barlow', sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
  transition: all ease-in-out .1s;
  z-index: 0;
}

.mainContainer::before {
  background-color: #101417;
  background-image: url(background.svg);
  background-repeat: repeat;
  background-size: 4px;
  content: "";
  display: block;
  opacity: 0.2;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

body.jp {
  font-family: 'Noto Sans JP', sans-serif;
}

.mobile {
  display: none;
}


/* HEADINGS */


h1 {
  background: linear-gradient(to left, #54e280 0, #1ec498 50%);
  background-clip: border-box;
  filter: contrast(2);
  font-size: 40px;
  font-weight: 500;
  margin: 24px auto 24px auto;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
}


h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0;
  text-transform: uppercase;
}


/* LINKS & BUTTONS */


a,
a:active,
a:visited {
  color: #e1eeef;
  cursor: pointer;
  text-decoration: none;
  transition: all ease-in-out .3s;
}

a:not([class]) {
  color: #1ec498;
  filter: contrast(1.5);
  transition: all ease-in-out .3s;
}

a:not([class]):hover {
  color: #1ec498;
  filter: contrast(1.5);
  text-decoration: underline 1px solid #11afaf;
}


a:hover {
  color: #11afaf;
}

.commonFont{
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
}

/* HEADER & NAVIGATION */


header.mobile {
  display: none;
}

header {
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.1) 100%);
  box-shadow: 0 16px 20px 0 #05131966;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 24px;
  width: 100%;
}

.logo {
  width: 150px;
}

.nav {
  font-size: 14px;
}

.nav ul {
  align-items: center;
  display: flex;
  margin: 0;
}

.nav li {
  display: inline;
  list-style: none;
  padding: 0 12px;
}



/* LANGUAGE PICKER */


ul.language-picker {
  display: inline;
  padding: 0;
}

.language{
  font-size: 15px;
  font-weight: 600;
}

.language:hover{
  color: #11afaf;
}


ul.language-picker li {
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.2) 100%);
  border-radius: 4px;
  cursor: pointer;
  display: inline;
  margin: 0 8px 8px 0;
  padding: 8px;
}

ul.language-picker li:hover {
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.6) 100%);
}

ul.language-picker li:hover a {
  color: #11afaf;
}

ul.language-picker li.selected {
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.9) 100%);
}


/* MAIN CONTENT */


#main:not([class]) {
  flex: 1 0 auto;
  width: 100%;
}

.content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
}

.content-glass {
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.1) 100%);
  box-shadow: 16px 16px 20px 0 #05131966;
  border-radius: 12px;
  color: #e1eeef;
  padding: 24px;
  margin: 24px 0 ;
  display: flex;
  flex-direction: column;
}

.Header-span{
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
}

.Header-line{
  margin-top: 36px;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
}

.topInfo{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 36px;

  span{
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
  }
}

.fundInfo{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  gap: 20px;

  .fundHeader{
    font-size: 14px;
    font-weight: 600;
    line-height: 100%;
  }

  span{
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
  }

}

.stepInfo{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  gap: 20px;

  .stepHeader{
    font-size: 14px;
    font-weight: 600;
    line-height: 100%;
  }

  .stepBox{
    display: flex;
    flex-direction: column;
  }

  span{
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
  }

}

/* COLUMNS */

.columns-4 {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.column-4 {
  margin: 24px 5% 24px 0;
  max-width: 20%;
  min-width: 240px;
}



/* FORMS */

.form-container {
  padding: 48px;
  margin: 0 auto 48px auto;
}


/* FOOTER */


footer {
  background: linear-gradient(to bottom right, #27424c 0, #051319 100%);
  box-shadow: 0px 0px 60px 15px #051319;
  flex-shrink: 0;
  margin: 96px 0 0 0;
  padding: 16px 0;
  position: relative;
  width: 100%;
  z-index: 1;
}


footer::before {
  background: linear-gradient(to left, #e85f1a 0, #ffe91d 50%, #1ec498 100%);
  display: block;
  content: "";
  opacity: .5;
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  width: 100%;
}

footer::after {
  background-image: url('../../public/procyon-logo.svg');
  background-position: 80% -20%;
  background-repeat: no-repeat;
  background-size: 500px;
  content: "";
  display: block;
  opacity: 0.1;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  z-index: -1;
}

footer .logo {
  width: 200px;
}

footer h1 {
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -1px;
  margin: 12px 0;
  padding: 0 0 12px 0;
}

footer h1::after {
  background: linear-gradient(to left, #e85f1a 0, #ffe91d 50%, #1ec498 100%);
  display: block;
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 100%;
}

.tagline {
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;
}

footer .content ul {
  margin: 0 0 12px 0;
  padding: 0;
  font-size: 16px;
}

footer .content ul li::before {
  display: none;
}

.copyright {
  font-size: 14px;
  line-height: 14px;
  margin: 8px 0;
}

@media (max-width:1023px) {

  html,
  body {
    min-width: 540px;
    width: 100%;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  button,
  input[type="submit"] {
    margin: 20px 0;
  }

  header.desktop {
    display: none;
  }

  header.mobile {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
  }

  header.mobile .header-inner {
    display: flex;
    justify-content: flex-end;
  }

  header.mobile .logo {
    width: 40px;
  }

  header.mobile .hr {
    height: 1px;
    margin: 12px 0;
  }

  header.mobile .nav {
    font-size: 12px;
    width: 100%;
  }

  header.mobile .nav ul {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  header.mobile .nav ul li {
    padding: 0 0 0 12px;
  }

  header.mobile button {
    font-size: 12px;
    margin: 0 0 0 12px;
    padding: 8px 12px;
  }

  #home-hero h1 {
    font-size: 32px;
  }

  #home-hero h2 {
    font-size: 24px;
  }

  h2:not(.hero h2)::after {
    background: linear-gradient(to right, transparent 0, #e1eeef 10%, transparent 90%);
  }

  .logo-feature-title {
    font-size: 12px;
    margin: 0 0 24px 0;
  }

  .logo-feature img {
    margin: 0 1%;
    max-width: 18%;
  }

  .highlight .column-2 {
    margin: 12px 0;
  }

  .highlight .with-frame::after {
    top: 0;
    left: 0;
    width: 100%;
  }

  .highlight h1 {
    font-size: 40px;
  }

  .highlight h2 {
    border-radius: 0 20px 20px 0;
    font-size: 24px;
  }

  .highlight li {
    font-size: 24px;
    padding: 8px 0 0 0;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .sub-feature > span {
    margin: 8px 0;
    text-align: center;
    width: 100%;
  }

  div.back-button {
    padding: 8px 12px;
  }

  div.hr {
    margin: 24px 0;
  }

  .content {
    padding: 0 12px;
  }

  .content ul {
    line-height: 24px;
  }

  .content ul li {
    margin: 0 0 8px 0;
  }

  .products {
    margin: 0 0 48px 0;
  }

  .product {
    margin: 0 0 36px 0;
    width: 100%;
  }

  .product:last-of-type {
    margin: 0;
  }

  .product-container > button {
    width: 100%;
  }

  h2.feature-title {
    font-size: 32px;
  }

  h3.feature-title {
    font-size: 24px;
  }

  .columns-1 {
    padding: 0;
  }

  .columns-1 img {
    padding: 0;
  }

  .column-2 {
    max-width: 100%;
    padding: 0;
    width: 100%;
  }

  .column-3 {
    margin: 0 0 72px 0;
    max-width: 100%;
    padding: 0;
    width: 100%;
  }

  .columns-4 {
    display: block;
  }

  .column-4 {
    margin: 0 0 24px 0;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  /* SIDEBAR */

  .with-sidebar {
    margin: 0;
    width: 100%;
  }

  header.with-sidebar {
    justify-content: flex-end;
  }

  .sidebar {
    display: none;
  }

  /* PRODUCT & IDO */

  .product-container {
    display: flex;
    padding: 12px;
  }

  .product-container h1 {
    font-size: 28px;
  }

  .product-container .three-section,
  .product-container .full-section {
    margin: 0 ;
    width: 100%;
  }

  .product-container .product-title-section {
    order: 1;
  }

  .product-container .product-sidebar {
    margin-top: 16px;
    order: 2;
    width: 100%;
  }

  .product-container .info {
    margin-top: 16px;
    order: 3;
    padding: 0;
    width: 100%;
  }

  .product-container .order-form {
    margin-top: 16px;
    order: 4;
    width: 100%;
  }

  .product-detail-text {
    margin: 0;
  }


  /* PROJECT BRANDING */


  .project .product-sidebar {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 16px;
    order: 5;
    width: 100%;
  }

  #project-links {
    order: 1;
    width: 100%;
  }

  #project-links .product-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  #project-links .product-links li {
    margin: 0;
    padding: 0 18px 18px 0;
  }

  #project-links .product-links span {
    display: none;
  }

  #product-form  {
    order: 2;
    width: 100%;
  }

  #deal-terms {
    order: 3;
  }

  #help {
    order: 4;
  }

  .project-title-section {
    order: 1;
    background-size: auto calc(100% + 32px);
    height: 200px;
    margin: -12px -12px 24px -12px;
    padding: 0;
    width: calc(100% + 48px);
  }

  .project .product-title-container {
    border-radius: 12px;
    top: 12px;
    left: 12px;
    bottom: unset;
    padding: 12px;
  }

  .project .product-title-container::before,
  .project .product-title-container::after {
    display: none;
  }

  .project h1 {
    font-size: 24px;
  }

  .team-member,
  .team-member:nth-child(3n) {
    margin-right: 4%;
    width: 48%;
  }

  .team-member:nth-child(2n) {
    margin-right: 0;
  }


  /* MINING DASHBOARD */


  .earnings-figure {
    margin: 0 0 24px 0;
    width: 100%;
  }

  .top-line-item {
    font-size: 18px;
    width: 100%;
  }

  .mining-summary .buttons button,
  .mining-summary .buttons button.alt {
    margin: 18px 0 0 0;
    width: 100%;
  }

  .mining-summary .buttons button:first-of-type {
    margin-top: 0;
  }

  .settings {
    justify-content: center;
  }

  .setting-box {
    margin: 12px 0;
    width: 100%;
  }


  /* AFFILIATES PAGE */

  .ref-box,
  .referral-code,
  .ref-box-inner button {
    width: 100%;
  }

  .ref-box .referral-code {
    font-size: 14px;
    height: auto;
    margin: 0 0 18px 0;
  }

  #commission-table th:nth-child(3),
  #commission-table td:nth-child(3),
  #commission-table th:nth-child(4),
  #commission-table td:nth-child(4),
  #direct-ref-table th:nth-child(2),
  #direct-ref-table td:nth-child(2) {
    display: none;
  }

  /* FOOTER */

  footer .content ul.language-picker {
    line-height: 2;
  }

  footer .content ul.language-picker li {
    font-size: 20px;
    margin: 0 12px 12px 0;
  }

}
</style>