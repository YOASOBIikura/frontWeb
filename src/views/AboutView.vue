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

        <div class="form-container">

          <div class="content-glass">

            <span v-if="state.langEn" class="Header-span">
              Important Notice: Procyon Platform Closure & Safe Withdrawal of<br>
              User Funds
            </span>
            <span v-else class="Header-span">
              ▼重要なお知らせ<br>
              Procyonプラットフォーム閉鎖と出金手続きのご案内
            </span>

            <div class="Header-line">
            </div>

            <div class="topInfo">
              <span v-if="state.langEn">
                Procyon's interactive platform is now <span class="boldSpan">closed</span> due to new regulatory requirements in Singapore.<br>
                <span class="boldSpan">User logins, balance viewing, and in-platform withdrawals are no longer available.</span>
              </span>
              <div v-else class="jpInfo">
                <span>Procyonコミュニティの皆さまへ</span>

                <span>平素よりお世話になっております。<br>この度、表題の件に関してご案内をいたします。</span>

                <span>
                シンガポールにおける新たな規制要件により、Procyonのインタラクティブプラットフォーム<br>
                は<span class="boldSpan">閉鎖されました</span>。<br>
                これに伴い、<span class="boldSpan">ログイン、残高確認、プラットフォーム内での出金機能等はご利用いただけない</span><br>
                <span class="boldSpan">状況です</span>。
                </span>
              </div>

              <span v-if="state.langEn">
                (See the official MAS regulatory update <a href="https://www.reedsmith.com/en/perspectives/2025/06/mas-finalises-clarifies-regulatory-regime-digital-token-service-providers?utm_source=chatgpt.com">here</a>.)
              </span>
              <span v-else>
                (公式のMAS規制アップデートは<a href="https://www.reedsmith.com/en/perspectives/2025/06/mas-finalises-clarifies-regulatory-regime-digital-token-service-providers?utm_source=chatgpt.com">こちら</a>をご覧ください)
              </span>

              <span v-if="state.langEn">
                We know how worrying and frustrating this is and we are truly sorry for the disruption.
              </span>
              <span v-else>
                <span class="boldSpan">皆さまには、ご不安やご不便をおかけしていることを心よりお詫び申し上げます。<br>
                当プラットフォームにて管理されていた全ユーザーの残高については、マイニングプールパー<br>
                トナーとの継続的な照合作業により記録・保全されており、損失が発生している兆候はありま<br>
                せん。皆さまの残高は、マイニングプールパートナーにより保持され、Procyonは全ユーザーが<br>
                正しく資産を受け取れるよう、検証・監督を行っております。</span>
              </span>

              <span v-if="state.langEn" class="boldSpan">
                We want to reassure you that all user balances have been recorded and safeguarded<br>
                through ongoing reconciliations with our mining pool partner. We have no indication of<br>
                any losses. Balances are maintained by the mining pool partner, and Procyon is actively<br>
                overseeing the process to ensure each verified user receives their entitled funds.
              </span>
              <span v-else>
                今回の新たな規制により法的に当プラットフォームの出金機能が維持できないため、<span class="boldSpan">すべての<br>
                ユーザーを対象に弊社から案内される『資産の出金申請フォーム』のGoogleフォームを通じ<br>
                て、皆さまの出金依頼をご提出いただく必要があります</span>。<br>
                マイニングプールパートナーがこの情報をもとに安全に送金処理を行う予定です。
              </span>

              <span v-if="state.langEn">
                Because the platform’s withdrawal function cannot legally operate, <span class="boldSpan">every user must now</span><br>
                <span class="boldSpan">submit a withdrawal request through the official Google Form</span> so that the mining pool<br>
                partner can process payouts securely. Links to the form and detailed instructions are provided<br>
                below on this page.
              </span>
              <span v-else>
                『資産の出金申請フォーム』の詳細手順は、以下をご確認ください。
              </span>

          </div>

            <div class="fundInfo">
              <span class="fundHeader">
                {{ t('about.funds') }}
              </span>

              <span v-if="state.langEn">
                While the platform is offline, <span class="boldSpan">withdrawals are fulfilled directly by our mining pool partner.</span><br>
                Procyon’s role is to verify user identity and pass verified information securely.
              </span>
              <span v-else>
                プラットフォームがオフラインとなっている間、<span class="boldSpan">出金はマイニングプールパートナーによって<br>
                直接処理されます。</span>Procyonの役割はユーザーの本人確認を行い、確認済みの情報を安全に引<br>き渡すことです。
              </span>

              <span>
                {{ t('about.process') }}
              </span>
        </div>

            <div class="stepInfo">
              <span class="stepHeader">
                {{ t('about.step1') }}
              </span>

              <span>{{ t('about.ready') }}</span>

              <div v-if="state.langEn" class="stepBox">
                <span>{{ t('about.KYC') }}</span>
                <span>• Identity documents (a clear photo of your passport photo page, plus a selfie<br> holding your passport)</span>
                <span>• Withdrawal addresses (double-check each carefully — Aleo; IRON + Tag/MEMO;<br> SMH; BTC; USDT with network specified)</span>
              </div>
              <div v-else class="stepBox">
                <span>{{ t('about.KYC') }}</span>
                <span>•	本人確認書類 (身分証明書の顔写真ページの鮮明な写真、およびそれを持った自撮り写<br>真)</span>
                <span>•	出金先アドレス (必ず間違いのないようご確認ください: Aleo／IRON＋タグ・メモ／<br>SMH／BTC／USDT ※ネットワーク種別を明記)</span>
              </div>

              <span class="stepHeader" style="margin-top: 15px">
                {{ t('about.step2') }}
              </span>

              <span v-if="state.langEn">Once you have everything prepared, submit your request through the official Google Form<br>(choose your language):</span>
              <span v-else>準備が整いましたら、以下のGoogleフォームから申請ください (言語を選択可) :</span>

              <div class="stepBox">
                <span><span class="boldSpan">{{ t('about.japanese') }}</span><a href="https://forms.gle/rThPAEXRG2dAu9tE7">https://forms.gle/rThPAEXRG2dAu9tE7</a></span>
                <span><span class="boldSpan">{{ t('about.english') }}</span><a href="https://forms.gle/jhr99yrbbSSBGp5u7">https://forms.gle/jhr99yrbbSSBGp5u7</a></span>
              </div>

              <span>{{ t('about.forms') }}</span>

              <span class="stepHeader" style="margin-top: 15px">
                {{ t('about.step3') }}
              </span>

              <div v-if="state.langEn" class="stepBox">
                <span>
                  • Requests submitted by <span class="boldSpan">November 1, 2025</span> will be processed on a priority basis and<br>
                  handled as promptly as possible.
                </span>
                <span>
                  • Transfers for these priority requests are planned to begin <span class="boldSpan">November 1</span> and are<br>
                  expected to be completed by <span class="boldSpan">December 1, 2025</span>, subject to partner processing times.
                </span>
                <span>• Requests submitted after November 1 will be processed on a rolling monthly basis<br>
                  (i.e. in the month following submission).</span>
                <span>• Because of the high volume of requests and partner processing times, each round of<br> transfers may take up to one month to fully complete.</span>
              </div>
              <div v-else class="stepBox">
                <span>
                  • <span class="boldSpan">2025年11月1日までに提出されたリクエストは優先的に処理され、</span><br>可能な限り迅速に対応いたします
                </span>
                <span>
                  • 優先リクエストの送金は<span class="boldSpan">11月1日から開始され、</span>パートナー側の処理時間に依存しま<br>すが、<span class="boldSpan">12月1日までに完了する予定</span>です
                </span>
                <span>• 11月1日以降に提出されたリクエストは、翌月以降のサイクルで順次処理されます</span>
                <span>•	リクエスト件数やパートナー側の処理状況により、各処理サイクルの完了には最大で1<br>か月かかる場合があります</span>
              </div>

              <span v-if="state.langEn">
                <span class="boldSpan">Important Disclaimer:</span> Please double-check all wallet addresses carefully before submitting.<br>
                <span class="boldSpan">Neither Procyon nor its mining pool partner can recover funds sent to an incorrect<br>
                address or accept liability for transfers made to addresses provided incorrectly. By<br>
                submitting your request, you accept full responsibility for the accuracy of all information<br>
                provided.</span>
              </span>
              <span v-else>
                <span class="boldSpan">重要な免責事項:</span> ご提出いただく前に、必ずすべてのウォレットアドレスに誤りがないかご確<br>
                認ください。<span class="boldSpan">Procyonおよびマイニングプールパートナー宛に誤ったウォレットアドレスを提<br>
                出され、マイニングプールパートナーが対象アドレス宛に送金を実施した際にはその資金は回<br>
                収・補填することはできません。また、Procyonおよびマイニングプールパートナーは、誤っ<br>
                たアドレスに送金された場合の責任は負いかねます。本フォームを提出することで、入力情報<br>
                の正確性についてユーザーご自身が最終的な責任を負うことに同意いただいたものとみなされ<br>
                ますので予めご了承ください。</span>
              </span>

              <span class="stepHeader" style="font-size: 20px; margin-top: 20px">
                {{ t('about.commitment') }}
              </span>

              <span v-if="state.langEn">
                We know words may not be enough, but we are committed to handling this process openly,<br>
                fairly, and safely within the limits of Singapore law. We appreciate your patience and<br>
                understanding as we complete this process securely. For security and compliance reasons,<br>
                please do not send personal or withdrawal information by email — all requests must be<br>
                submitted through the official withdrawal form above.
              </span>
              <span v-else>
                言葉だけでは十分でないかもしれませんが、弊社はこのプロセスを透明性、公平性、安全性を<br>
                もって、シンガポール法の範囲内で遂行いたします。このプロセスを安全に完了するにあた<br>
                り、皆さまのご辛抱とご理解に心より感謝申し上げます。<br>
                なお、セキュリティおよびコンプライアンスの観点から、メールでの個人情報や出金情報のご<br>
                依頼は受け付けておりません。<br>
                必ず上記の『資産の出金申請フォーム』を通じてご提出ください。
              </span>

              <span class="boldSpan">
                {{ t('about.procyon') }}
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

const { t, locale } = useI18n()

const state = reactive({
  langEn: true
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
  width: 950px;
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
  font-size: 26px;
  font-weight: 700;
  line-height: 100%;
}

.Header-line{
  margin-top: 36px;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
}

.boldSpan{
  font-weight: bold !important;
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
    line-height: 16px;
  }
}

.jpInfo{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }
}

.fundInfo{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  gap: 20px;

  .fundHeader{
    font-size: 20px;
    font-weight: 600;
    line-height: 100%;
  }

  span{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
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
    gap: 18px;
    margin-left: 40px;
  }

  span{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
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