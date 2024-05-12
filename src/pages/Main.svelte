<script>
    let hour=new Date ().getHours();
    let min = new Date().getMinutes();

</script>
<header>
    <div class="info-bar">
      <div class="info-bar__time">{hour}:{min}</div>
      <div class="info-bar__icons">
        <img src="assets/chart-bar.svg" alt="chart-bar" />
        <img src="assets/wifi.svg" alt="wifi" />
        <img src="assets/battery50.svg" alt="battery" />
      </div>
    </div>
    <div class="menu-bar">
      <div class="menu-bar__location">
        <span>역삼1동</span>
        <img src="assets/chevron-down.svg" alt="더보기" />
      </div>
      <div class="menu-bar__icons">
        <img src="assets/magnifying-glass.svg" alt="검색" />
        <img src="assets/bars-3.svg" alt="메뉴" />
        <img src="assets/bell.svg" alt="알림" />
      </div>
    </div>
  </header>
  <main>
    <a class="write-btn" href="#/write">+ 글쓰기</a>
  </main>
  <footer>
    <div class="footer-block">
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/home.svg" alt="" />
        </div>
        <div class="footer-icons__desc">홈</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/doc.svg" alt="" />
        </div>
        <div class="footer-icons__desc">동네생활</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/rocation.svg" alt="" />
        </div>
        <div class="footer-icons__desc">내 근처</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/chat.svg" alt="" />
        </div>
        <div class="footer-icons__desc" id="chat">채팅</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/user.svg" alt="" />
        </div>
        <div class="footer-icons__desc">나의 당근</div>
      </div>
    </div>
  </footer>
  <div class="midia-info-msg">화면 사이즈를 줄여주세요.</div>

  <style>

  </style>