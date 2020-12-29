<template>
  <div>
    <TipBoard :showTypeColumn="true"></TipBoard>
    <div class="post-select-wrap">
      <div class="middle">
        <div class="index-zmlg-mian">
          <ul>
            <li>
              <div class="icon">
                <svg-icon icon-class="select-k" class-name="card-panel-icon" />
              </div>
              <p>选择目标媒体</p>
              <em>01</em>
            </li>
            <li>
              <div class="icon">
                <svg-icon icon-class="edit-k" class-name="card-panel-icon" />
              </div>
              <p>投放广告内容</p>
              <em>02</em>
            </li>
            <li>
              <div class="icon">
                <svg-icon icon-class="examine-k" class-name="card-panel-icon" />
              </div>
              <p>执行文案内容</p>
              <em>03</em>
            </li>
            <li>
              <div class="icon">
                <svg-icon icon-class="release-k" class-name="card-panel-icon" />
              </div>
              <p>查询验收结果</p>
              <em>04</em>
            </li>
            <i class="licon"></i>
            <i class="ricon"></i>
          </ul>
        </div>
      </div>

    </div>
    <div class="select-list">
      <div class="title">创建订单活动</div>
      <ul>
        <li>
          <div class="img">
            <div class="radius">
             <svg-icon icon-class="website-k" class-name="card-panel-icon" />
            </div>
          </div>
          <h3>商业媒体</h3>
          <p>
            全部媒体底价发稿，绝不收取任何额外费用，
            无溢价，无服务费
          </p>
        </li>
        <li>
          <div class="img">
            <div class="radius">
              <svg-icon icon-class="media-k" class-name="card-panel-icon" />
            </div>
          </div>
          <h3>自媒体</h3>
          <p>
            轻松添加各类媒体资源，毫秒级审核速度
          </p>
        </li>
        <li>
          <div class="img">
            <div class="radius">
                 <svg-icon icon-class="headlines-k" class-name="card-panel-icon" />
            </div>
          </div>
          <h3>动态/微头条</h3>
          <p>
            对接超过5000家品牌企业需求方，入驻即接稿
          </p>
        </li>
        <li>
          <div class="img">
            <div class="radius">
                 <svg-icon icon-class="marketing-k" class-name="card-panel-icon" />
            </div>
          </div>
          <h3>论坛营销</h3>
          <p>
            透明流水，轻松提现，到账快，无延时卡顿
          </p>
        </li>
        <li>
          <div class="img">
            <div class="radius">
               <svg-icon icon-class="wx-k" class-name="card-panel-icon" />
            </div>
          </div>
          <h3>微信公众号</h3>
          <p>
            资深技术团队运营，保障平台流畅性和自动化发稿体验感，杜绝任何故障
          </p>
        </li>
        <li>
          <div class="img">
            <div class="radius">
                      <svg-icon icon-class="weibo-k" class-name="card-panel-icon" />
            </div>
          </div>
          <h3>新浪微博</h3>
          <p>
            专人对接，一手直编资源，不转手不外包
          </p>
        </li>
        <li>
          <div class="img">
            <div class="radius">
                     <svg-icon icon-class="friend-k" class-name="card-panel-icon" />
            </div>
          </div>
          <h3>朋友圈</h3>
          <p>
            专人对接，一手直编资源，不转手不外包
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TipBoard from '@/components/TipBoard'
  export default {
    components: {
      TipBoard
    }
  }
</script>

<style lang="scss" scoped>
  .post-select-wrap {
    width: 100%;
    height: 400px;
    background: url(~@/assets/images/zmlgbg.png)no-repeat;
    background-size: 100%;
    padding: 80px 0;
  }

  .index-zmlg-mian {
    border-bottom: 1px solid #3dbeef;
    height: 240px;
    position: relative;
  }

  .index-zmlg-mian ul li {
    width: 25%;
    float: left;
    text-align: center;
  }

  .middle {
    width: 1200px;
    margin: 0 auto;
  }

  .index-zmlg-mian ul li p {
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
  }

  .index-zmlg-mian ul li em {
    width: 38px;
    height: 38px;
    display: inline-block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #76d7fd;
    line-height: 38px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    background: #0fafeb;
    font-style: normal;
    margin-top: 70px;
  }

  .index-zmlg-mian ul li .icon {
    width: 100px;
    height: 100px;
    border: 3px solid #fff;
    border-radius: 50%;
    margin: 0 auto;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .licon {
    left: 0;
  }

  .ricon {
    right: 0;
  }

  .index-zmlg-mian .licon,
  .index-zmlg-mian .ricon {
    width: 12px;
    height: 12px;
    display: inline-block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #76d7fd;
    background: #0fafeb;
    position: absolute;
    bottom: -7px;
  }

  .select-list {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
  }

  .select-list .title {
    font-size: 32px;
    color: #333;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 60px;
  }

  .select-list .title::after {
    content: '';
    display: inline-block;
    width: 60px;
    height: 2px;
    background-color: #3D67E1;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .select-list ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .select-list ul li {
    padding: 25px 65px 25px 65px;
    border-radius: 5px;
    margin-bottom: 24px;
    width: 32%;
    text-align: center;
  }

  .select-list ul li .img {
    width: 212px;
    height: 212px;
    background-color: rgba(33, 92, 198, .1);
    border-radius: 50%;
    padding-top: 11px;
    margin: 0 auto;
  }

  .select-list ul li .radius {
    width: 190px;
    height: 190px;
    background: #215CC6;
    border-radius: 50%;
    margin: 0 auto;
    line-height: 190px;
    font-size: 100px;
  }

  .select-list ul li h3 {
    color: #333333;
    margin-top: 25px;
    font-size: 24px;
  }

  .select-list ul li p {
    color: #666;
    font-size: 14px;
    line-height: 24px;
    margin-top: 12px;
  }

  .select-list ul li:nth-child(2) .radius {
    background-color: rgba(255, 109, 59, 1);
  }

  .select-list ul li:nth-child(3) .radius {
    background-color: #fff;
  }

  .select-list ul li:nth-child(4) .radius {
    background-color: #c72ab7;
  }

  .select-list ul li:nth-child(5) .radius {
    background-color: #fff;
  }

  .select-list ul li:nth-child(6) .radius {
    background-color: rgba(255, 213, 92, 1);
  }
  .select-list ul li:nth-child(7) .radius {
    background-color:#333;
  }
</style>
