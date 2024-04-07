<script>
    /** @type {import('./$types').PageData} */
    export let data;
    // 변수선언
    let sortKey = null;
    let isAscending = true;
    // ⭐⭐ 새로고침이 필요한 데이터 정의 ( 졸라 중요 )
    let result_dict_list, 현재페이지;
    $: {
        result_dict_list = data['result']['result_dict_list'];
        현재페이지 = data['result']['현재페이지'];
    }

    //페이지네이션을 위한 최대 페이지 리스트 생성
    let maxPages = data['result']['전체페이지'];
    let pages = Array.from({length: maxPages}, (_, i) => i + 1); // 1부터 maxPages까지의 배열 생성
    // 특정 페이지로 이동하는 함수
    import { goto, invalidate } from '$app/navigation';
    async function navigateToPage(pageNumber) {
        await invalidate(`/리셀정보/kream/${pageNumber}`);
        goto(`/리셀정보/kream/${pageNumber}`, { replaceState: true });
    }

    //정렬기능
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

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

<table class="table-auto shadow-md mx-auto w-full whispace-nowrap rounded-lg bg-white divide-y divide-gray-500 overflow-hidden">

    <!-- head -->
    <thead class="bg-gray-50">
        <tr class="text-gray-600 text-center">
            <th class="font-semibold text-sm uppercase px-6 py-4">
                이미지
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                브랜드명
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                제품명
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                옵션
            </th>
            <th on:click={() => sortData('일반입찰마진')} class="font-semibold text-sm uppercase px-6 py-4">
                일반입찰마진
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                보판입찰마진
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                KREAM
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                OKmall
            </th>

        </tr>
    </thead>
    <tbody class="text-gray-700">
        {#each result_dict_list as item }
            <tr class="hover:bg-gray-100">
                <td class="px-6 py-1">
                    <div class="flex justify-center my-8">
                        <img src={item.제품_이미지} referrerPolicy="no-referrer" alt="이미지 설명" style="max-width: 100px; height: auto;">
                    </div>                    
                </td>
                <td class="px-6 py-1">
                    <div class="flex items-center space-x-3">
                        <div>{item.브랜드명}</div>
                    </div>
                </td>
                <td class="px-6 py-1">
                    <div class="flex items-center space-x-3">
                        <div>{item.제품명_원문}</div>
                    </div>
                </td>
                <td class="px-6 py-1">
                    <div class="flex items-center space-x-3">
                        <div>{item.옵션_1}</div>
                    </div>
                </td>
                <td class="px-6 py-1">
                    <div class="flex items-center space-x-3">
                        <div>{Number(item.즉시구매가격_일반판매입찰 - item.okmall_즉시구매가격).toLocaleString() + "원"}</div>
                    </div>
                </td>
                <td class="px-6 py1">
                    <div class="flex items-center space-x-3">
                        <div>{Number(item.즉시구매가격_보관판매입찰 - item.okmall_즉시구매가격).toLocaleString() + "원"}</div>
                    </div>
                </td>

                <td class="px-6 py-1 text-center">
                    <div class="flex items-center justify-center">
                        <a href={item["제품_URL"]} target='None1'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </td>
                <td class="px-6 py-1 text-center">
                    <div class="flex items-center justify-center">
                        <a href={item["okmall_URL"]} target='None2'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<!-- 페이지네이션구역 -->

<div class="flex justify-center mt-5">
    {#if maxPages <= 10}
        {#each Array.from({ length: maxPages }, (_, i) => i + 1) as page}
            <input class="join-item btn btn-square" type="radio" name="options" aria-label={page} checked={Number(현재페이지) === page} on:click={() => navigateToPage(page)} />
        {/each}
    {:else}
        {#if Number(현재페이지) > 10}
            <button class="join-item btn btn-square" on:click={() => navigateToPage(Math.floor((Number(현재페이지) - 1) / 10) * 10 + 0)}>«이전</button>
        {/if}
        {#each Array.from({ length: Math.min(10, maxPages - Math.floor((Number(현재페이지) - 1) / 10) * 10) }, (_, i) => Math.floor((Number(현재페이지) - 1) / 10) * 10 + i + 1) as page}
            <input class="join-item btn btn-square" type="radio" name="options" aria-label={page} checked={Number(현재페이지) === page} on:click={() => navigateToPage(page)} />
        {/each}
        {#if Number(현재페이지) + 10 <= maxPages}
            <button class="join-item btn btn-square" on:click={() => navigateToPage(Math.floor((Number(현재페이지) - 1) / 10) * 10 + 11)}>다음»</button>
        {/if}
    {/if}
</div>