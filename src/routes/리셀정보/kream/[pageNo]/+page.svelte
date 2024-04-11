<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>
<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { page } from '$app/stores'; // [현재 페이지 파라미터 받아오기]
    import { onMount } from 'svelte';

    // [일반변수선언]
    let sortKey = null;
    let isAscending = true;
    let Max_PN = 5;
    let temp;


    // [페이지 네이션 정리]
    // ⭐⭐ 새로고침이 필요한 데이터 정의 ( 졸라 중요 )
    let result_dict_list, 현재페이지;
    $: {
        result_dict_list = data['result']['result_dict_list'];
        현재페이지 = $page.params.pageNo;
    }
    let maxPages = data['result']['전체페이지'];
    let pages = Array.from({length: maxPages}, (_, i) => i + 1); // 1부터 maxPages까지의 배열 생성
    

    // 특정 페이지로 이동하는 함수
    import { goto, invalidate } from '$app/navigation';
    async function navigateToPage(pageNumber) {
        await invalidate(`/리셀정보/kream/${pageNumber}`);
        goto(`/리셀정보/kream/${pageNumber}`, { replaceState: true });
    }


    // 상세페이지로 이동하는 함수
    function goToDetailPage(productID, option){
        if (typeof window !== 'undefined') {
            const url = `/리셀정보/kream/kream_detail/${productID}/${option}`;
            //window.open(url, '_blank'); // 새로운 탭으로 URL을 엽니다.
            window.location.href = url; // 현재 페이지의 URL을 변경합니다.
        }
    }


    // [정렬기능]
    function sortData(by) {
        if (sortKey === by) {
        isAscending = !isAscending;
        } else {
        isAscending = true;
        }
        sortKey = by;

        result_dict_list = result_dict_list.sort((a, b) => {
        if (a[by] === b[by]) return 0;
        return (a[by] < b[by] ? -1 : 1) * (isAscending ? 1 : -1);
        });
  }
    
</script>

<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ STYLE 영역 ⬇⬇⬇ -------------------->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">


<!---------------------------------------------------------->
<!------------------ ⬇⬇⬇ HTML 영역 ⬇⬇⬇ ------------------>
<table class="table-auto shadow-md mx-auto w-full whispace-nowrap rounded-lg bg-white divide-y divide-gray-500 overflow-hidden">

    <!-- head -->
    <thead class="bg-blue-200 text-center">
        <tr class="text-black">
            <th class="font-semibold text-sm uppercase px-6 py-4 w-1/6 overflow-hidden">
                이미지
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4 w-1/6 overflow-hidden">
                브랜드명
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4 w-1/4 overflow-hidden">
                제품명
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4 w-1/8 overflow-hidden">
                옵션
            </th>
            <th on:click={() => sortData('일반입찰마진')} class="font-semibold text-sm uppercase px-6 py-4 w-1/6 overflow-hidden">
                일반입찰마진
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4 w-1/6 overflow-hidden">
                보판입찰마진
            </th>
        </tr>
    </thead>
    
    
    <tbody class="text-gray-700">
        {#each result_dict_list as item }
            <tr class="hover:bg-gray-100 text-center" on:click={() => goToDetailPage(item.품번_1, item.옵션_1)}>
                <td>
                    <img src={item.제품_이미지} referrerPolicy="no-referrer" alt="이미지 설명" style="max-width: 100px; height: auto; display: block; margin: 0 auto;">
                </td>  
                <td>{item.브랜드명}</td>
                <td>{item.제품명_원문}</td>
                <td>{item.옵션_1}</td>
                <td>{Number(item.즉시구매가격_일반판매입찰 - item.okmall_즉시구매가격).toLocaleString()}원</td>
                <td>{Number(item.즉시구매가격_보관판매입찰 - item.okmall_즉시구매가격).toLocaleString()}원</td>
            </tr>
        {/each}
    </tbody>
</table>

<!-- 페이지네이션구역 -->
<div class="flex justify-center mt-5">
    {#if maxPages <= Max_PN}
        {#each Array.from({ length: maxPages }, (_, i) => i + 1) as page}
            <input class="join-item btn btn-square" type="radio" name="options" aria-label={page} checked={Number(현재페이지) === page} on:click={() => navigateToPage(page)} />
        {/each}
    {:else}
        {#if Number(현재페이지) > Max_PN}
            <button class="btn btn-outline btn-primary" on:click={() => navigateToPage(Math.floor((Number(현재페이지) - 1) / Max_PN) * Max_PN + 0)}>«이전</button>
        {/if}
        {#each Array.from({ length: Math.min(Max_PN, maxPages - Math.floor((Number(현재페이지) - 1) / Max_PN) * Max_PN) }, (_, i) => Math.floor((Number(현재페이지) - 1) / Max_PN) * Max_PN + i + 1) as page}
            <input class="join-item btn btn-square" type="radio" name="options" aria-label={page} checked={Number(현재페이지) === page} on:click={() => navigateToPage(page)} />
        {/each}
        {#if Math.ceil(maxPages/Max_PN) > Math.ceil(현재페이지/Max_PN)}
            <button class="btn btn-outline btn-primary" on:click={() => navigateToPage(Math.floor((Number(현재페이지) - 1) / Max_PN) * Max_PN + Max_PN + 1)}>다음»</button>
        {/if}
    {/if}
</div>