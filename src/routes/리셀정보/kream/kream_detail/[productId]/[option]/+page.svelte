<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>
<script>
    /** @type {import('./$types').PageData} */
    export let data;
    // [대상 데이터 정의]
    let target_data = data["result"]["result_dict_list"][0]

    // [현재 페이지 파라미터 받아오기]
    import { page } from '$app/stores'; 
    let productId = $page.params.productId;
    let option = $page.params.option;


</script>


<!---------------------------------------------------------->
<!------------------ ⬇⬇⬇ HTML 영역 ⬇⬇⬇ ------------------>

<div class="flex justify-center mt-5">
    <div class="stats shadow">
      
        <div class="stat place-items-center">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">From January 1st to February 1st</div>
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title">Users</div>
          <div class="stat-value text-secondary">4,200</div>
          <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
    </div>
  </div>
  


<div class="divider"></div> 

<div class="flex justify-between">
    <div class="card w-1/2 bg-base-100 shadow-xl mr-2">
        <figure class="px-10 pt-10">
            <img src={target_data['제품_이미지']} alt="Shoes" class="rounded-lg object-contain h-96 w-full" />
        </figure>
        <div class="card-body text-left">
            <h1 class="card-title mt-0 mb-2">KREAM</h1>
            <ul>
                <li><strong>제품명:</strong> {target_data['제품명_원문']}</li>
                <li><strong>옵션:</strong> {target_data['옵션_1']}</li>
                <li><strong>색상:</strong> {target_data['색상']}</li>
            </ul>
        </div>
    </div>

    <div class="card w-1/2 bg-base-100 shadow-xl ml-2">
        <figure class="px-10 pt-10">
            <img src={target_data['okmall_이미지']} alt="Shoes" class="rounded-lg object-contain h-96 w-full" />
        </figure>
        <div class="card-body text-left">
            <h1 class="card-title mt-0 mb-2">OKmall</h1>
            <ul>
                <li><strong>제품명:</strong> {target_data['okmall_제품명_원문']}</li>
                <li><strong>옵션:</strong> {target_data['okmall_옵션_1']}</li>
                <li><strong>색상:</strong> {target_data['okmall_색상']}</li>
            </ul>
        </div>
    </div>
</div>


<div class="divider"></div> 

<div class="flex flex-col w-full">
    <div class="grid h-auto card bg-gray-100 rounded-box">
        <div class="flex items-center mb-2 text-left">
            <h2 class="text-2xl font-bold pl-4 pt-4">💡 마진전략</h2> 
        </div>
        
        <h2 class="text-gray-500 font-bold mb-4 text-left pl-5">OKmall에서 매입해서 KREAM에 판매하는 전략입니다</h2>

        <div class="grid grid-cols-4 gap-2 text-left pl-5 pb-3">
            <div class="mb-2">
                <p>OKmall 구매가격</p>
                <p><b>{new Intl.NumberFormat('ko-KR').format(target_data['okmall_즉시구매가격'])} 원</b></p>
            </div>
            <div class="mb-2">
                <p>KREAM 일반판매입찰</p>
                <p><b>{new Intl.NumberFormat('ko-KR').format(target_data['즉시구매가격_일반판매입찰'])} 원</b></p>
            </div>
            <div class="mb-2">
                <p>KREAM 보관판매입찰</p>
                <p><b>{new Intl.NumberFormat('ko-KR').format(target_data['즉시구매가격_보관판매입찰'])} 원</b></p>
            </div>
            <!-- 중복된 OKmall 구매가격 항목이 있으므로, 이 부분은 제거하거나 다른 정보로 대체 필요 -->
        </div>
    </div> 
</div>





