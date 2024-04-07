<script>

  export let avatar;
  export let name;
  export let loggedIn;

  

</script>

<div class="navbar bg-base-100 shadow mb-8">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href = "/">Home</a>

    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn m-1">리셀정보</div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href = "/리셀정보/kream/1">KREAM</a></li>
        <li><a href = "/리셀정보/okmall">OKmall</a></li>
        <li><a href = "/리셀정보/stockx">StockX</a></li>
      </ul>
    </div>

    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button" class="btn m-1">위탁판매정보</div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>

  </div>
  <div class="flex-none">

    <ul class="menu menu-horizontal px-1">

      {#if loggedIn['result'] === "success"}
        <li><p>{name}님 반갑습니다.</p></li>
        {#if loggedIn['user']['authority'] === "관리자"}
          <li><a href = "/회원정보관리">회원정보관리</a></li>
       {/if}
        <li><a href = "/테스트">테스트</a></li>
        <li>
          <form method="POST" action="/logout">
            <button>로그아웃</button>
          </form>
        </li>
      {:else}
        <li><a href = "/login">로그인</a></li>
      {/if}
      

    </ul>
  </div>
</div>
