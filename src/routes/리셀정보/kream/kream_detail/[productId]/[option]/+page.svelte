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


<div class="flex justify-between w-full">
    <!-- 첫 번째 카드 -->
    <div class="flex-shrink-0 card shadow-xl flex-col w-96 mr-4">
        <div class="card-body flex-grow flex flex-col justify-start">
            <h1 class="card-title mt-0 mb-2">KREAM</h1>
            <ul class="mt-0">
                <li class="mb-0"><strong>제품명:</strong> {target_data['제품명_원문']}</li>
                <li class="mb-0"><strong>옵션:</strong> {target_data['옵션_1']}</li>
                <li class="mb-0"><strong>색상:</strong> {target_data['색상']}</li>
            </ul>
        </div>
        <figure><img src={target_data['제품_이미지']} alt="Shoes" /></figure>
    </div>

    
    <!-- 두 번째 카드 -->
    <div class="flex-shrink-0 card shadow-xl flex-col w-96 ml-4">
        <div class="card-body flex-grow flex flex-col justify-start">
            <h1 class="card-title mt-0 mb-2">OKmall</h1>
            <ul class="mt-0">
                <li class="mb-0"><strong>제품명:</strong> {target_data['okmall_제품명_원문']}</li>
                <li class="mb-0"><strong>옵션:</strong> {target_data['okmall_옵션_1']}</li>
                <li class="mb-0"><strong>색상:</strong> {target_data['okmall_색상']}</li>
            </ul>
        </div>
        <figure><img src={target_data['okmall_이미지']} alt="Shoes" /></figure>
    </div>
</div>

<div class="divider"></div> 

<div class="flex flex-col w-full">
    <div class="grid h-auto card bg-gray-100 rounded-box place-items-center"> <!-- 배경색 변경 -->
        <div class="flex items-center mb-2">
            <h2 class="text-2xl font-bold">🔍마진전략</h2> 
        </div>
        <h2 class="text-gray-500 font-bold mb-4">OKmall에서 매입해서 KREAM에 판매하는 전략입니다</h2>

        <div class="grid grid-cols-4 gap-2">
            <div class="mb-2">
                <p>OKmall 구매가격 :</p>
                <p>{target_data['okmall_즉시구매가격']}</p>
            </div>
            <div class="mb-2">
                <p>OKmall 구매가격 :</p>
                <p>{target_data['okmall_즉시구매가격']}</p>
            </div>
            <div class="mb-2">
                <p>OKmall 구매가격 :</p>
                <p>{target_data['okmall_즉시구매가격']}</p>
            </div>
            <div class="mb-2">
                <p>OKmall 구매가격 :</p>
                <p>{target_data['okmall_즉시구매가격']}</p>
            </div>
        </div>
    </div> 
</div>




