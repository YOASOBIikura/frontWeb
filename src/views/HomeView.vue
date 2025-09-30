<template>
  <div class="procyon-page">
    <!-- 顶部导航栏 -->
    <header class="header">
      <img class="brand" src="@/assets/images/logo.png" />
      <div class="language-selector">
        <button @click="handleChangeEn" class="lang-btn" :class="state.languageChange?'active':''">EN</button>
        <button @click="handleChangeJP" class="lang-btn" :class="state.languageChange?'':'active'">JP</button>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="announcement-box">
        <!-- 公告标题 -->
        <h1 class="announcement-title">announcement</h1>

        <div class="announcement-bottom-bar">
        </div>

        <div class="infoContent">

          <span class="infoTop">
            As part of our platform closure, Procyon can no longer provide login, balance, or withdrawal features due to new regulatory requirements in Singapore. However, your funds and accumulated mining proceeds
            remain completely safe.
          </span>

          <span class="infoForm">
            This form is required so we can verify your identity and securely transfer your remaining Procyon funds to the addresses you provide. All information will be handled confidentially and used only for
            processing your withdraw.
          </span>

          <div class="infoMad1">
            <span class="infoMad-header">
              Important Timeline
            </span>

            <ul>
              <li>Requests received by November 1, 2025 will be included in the first batch.</li>
              <li>Transfers for this batch will begin November 1 and be completed by December 1, 2025.</li>
              <li>Requests received after November 1 will be processed on a rolling monthly basis thereafter.</li>
            </ul>

          </div>

          <div class="infoMad2">
            <span class="infoMad-header">
              Section 1: Identity Verification
            </span>

            <div class="optionContainer">
              <span>Full Name</span>
              <span>Phone Number</span>
              <span>Passport Number</span>
              <span>Registered Procyon Email Address</span>
            </div>
          </div>

          <div class="infoMad3">
            <span class="infoMad-header">
              Section 2: Withdrawal Addresses
            </span>

            <span class="infoMad-text">
              Please double-check your addresses carefully before submitting. Procyon cannot recover funds sent to an incorrect address. By submitting this form, you accept full responsibility for the accuracy of the
              addresses vou provide.
            </span>

            <div class="optionContainer">
              <span>Aleo Wallet Address</span>
              <span>IRON Wallet Address + Tag/MEMO (if required)</span>
              <span>SMH Wallet Address</span>
              <span>BTC Wallet Address</span>
            </div>

          </div>

          <div class="infoMad4">
            <span class="infoMad-header">
              USDT Wallet Address (please specify network: ERC20, TRC20, etc.)
            </span>

            <span class="infoMad-titleInfo">
              Thank you. Your request has been received. Our team will review your information and process your withdrawal info accordance with the following schedule:
            </span>
            <ul>
              <li>Requests received by November 1, 2025 are included in the first batch; transfers will begin November 1 and be completed by December 1, 2025.</li>
              <li>Requests received after November 1 will be processed on a rolling monthly basis thereafter.</li>
            </ul>

            <span class="infoMad-bottom">
              We sincerely apologize for the inconvenience caused by Procyon's platform closure and appreciate your patience and understanding as we work to complete all transfers securely.
            </span>
          </div>


          <div class="bottom-btn">
            <span>
              Click Submit Payment Information
            </span>
          </div>

        </div>

      </div>
    </main>
  </div>
</template>

<script setup>

import {reactive} from "vue";

const state = reactive({
  languageChange: true
})

const handleChangeEn = () => {
  state.languageChange = true
}

const handleChangeJP = () => {
  state.languageChange = false
}

</script>

<style lang="less" scoped>

/* 隐藏滚动条 */
:global(html) {
  overflow: hidden;
}

:global(body) {
  overflow: hidden;
}

.procyon-page {
  width: 100%;
  height: 100vh;
  background: #203339;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #6c757d;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #384d54;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  .brand {
    width: 200px;
    height: 30px;
  }
  
  .language-selector {
    display: flex;
    gap: 15px;
    
    .lang-btn {
      background: #576c72;
      border: none;
      color: white;
      padding: 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 600;
      transition: all 0.2s ease;
      
      &.active {
        background: rgba(255, 255, 255, 0.5);
        color: #f5f6f7;
      }
      
      &:hover:not(.active) {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 160px;
  height: calc(100vh - 80px);
  overflow-y: auto;
  overflow-x: hidden;
  
  /* 隐藏滚动条但保持滚动功能 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
}

.announcement-box {
  background: #3e5057;
  border-radius: 20px;
  padding: 40px;
  width: 50%;
  min-width: 500px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.announcement-title {
  font-size: 18px;
  font-weight: 600;
  color: #f5f6f7;
  margin: 0 0 30px 0;
  text-align: left;
  letter-spacing: 1px;
}

.announcement-bottom-bar{
  width: 100%;
  height: 3px;
  background-image: linear-gradient(to right, #91999e 20%, #3e5057 95%);
}

.infoContent{
  box-sizing: border-box;
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.commonFont{
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  color: #f5f6f7;
}

.infoTop{
  .commonFont()
}

.infoForm{
  margin-top: 20px;
  .commonFont()
}

.commonContainer{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.infoMad1{
  margin-top: 20px;
  .commonContainer();

  .infoMad-header{
    .commonFont();
    font-size: 14px;
    font-weight: 600;
  }

  ul{
    margin-top: 25px;
    li{
      .commonFont();
      margin-top: 5px;
    }
  }
}

.infoMad2{
  margin-top: 30px;
  .commonContainer();

  .infoMad-header{
    .commonFont();
    font-size: 14px;
    font-weight: 600;
  }

  .optionContainer{
    margin-top: 30px;
    display: flex;
    gap: 50px;

    span{
      .commonFont();
      font-size: 14px;
      font-weight: 600;
    }
  }
}

.infoMad3{
  margin-top: 35px;
  .commonContainer();

  .infoMad-header{
    .commonFont();
    font-size: 14px;
    font-weight: 600;
  }

  .infoMad-text{
    margin-top: 15px;
    .commonFont();
  }

  .optionContainer{
    margin-top: 30px;
    display: flex;
    gap: 50px;

    span{
      .commonFont();
      font-size: 14px;
      font-weight: 600;
    }
  }
}

.infoMad4{
  margin-top: 30px;
  .commonContainer();

  .infoMad-header{
    .commonFont();
    font-size: 14px;
    font-weight: 600;
  }

  .infoMad-titleInfo{
    margin-top: 30px;
    margin-bottom: 5px;
    .commonFont();
  }
  ul{
    li{
      .commonFont();
      margin-bottom: 5px;
    }
  }

  .infoMad-bottom{
    margin-top: 25px;
    .commonFont();
  }
}

.bottom-btn{
  margin-top: 100px;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to right, #fe891c, #ff5000);

  span{
    .commonFont();
    font-size: 13px;
    font-weight: 600;
  }
}
</style>
