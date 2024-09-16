<!-------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>
<script>
	import { json } from '@sveltejs/kit';
    /** @type {import('./$types').PageData} */

    //페이지 로드할때 초기값 불러오기
    export let data;
    let result_dict = data.props.userAccount;

    //form 저장결과 리턴받기
    export let form;
    import { onMount } from 'svelte';
    onMount(() => {
        if (form && form.status === 'success') {
            alert('회원 정보가 성공적으로 업데이트되었습니다.');
        }
    });


</script>

<!-------------------------------------------------------->
<!------------------ ⬇⬇⬇ HTML 영역 ⬇⬇⬇ ------------------>
<div class="text-center my-6">
    <button class="btn btn-primary ml-4 inline-block align-middle" on:click={() => window.history.back()}>뒤로가기</button>
    <h1 class="text-4xl font-bold inline-block align-middle">회원정보수정</h1>
</div>

{#if result_dict} <!-- userAccount가 존재하는지 확인합니다. -->

    <form method = "post">


        <div class="max-w-lg mx-auto space-y-1"> <!-- space-y-4 클래스를 사용하여 요소 간의 수직 간격을 추가합니다. -->
            <!-- 수정불가능한데이터먼저 보여주기 -->
            <label class="input input-bordered flex items-center gap-2">
                아이디 :
                <input type="text" name = "id" class="grow" value={result_dict.id} placeholder="Daisy" />
            </label>
            <label class="input input-bordered flex items-center gap-2">
                생성 날짜 : {result_dict.create_at}
            </label>
            <label class="input input-bordered flex items-center gap-2">
                마지막 접속아이피 : {result_dict.latest_login_ip}
            </label>
            <label class="input input-bordered flex items-center gap-2">
                마지막 접속시간 : {result_dict.latest_login_time}
            </label>
            <label class="input input-bordered flex items-center gap-2">
                업데이트 날짜 : {result_dict.update_at}
            </label>
            <label class="input input-bordered flex items-center gap-2">
                남은기간(day) : {result_dict.remaining_days}
            </label>


            <hr style="margin-top: 20px; margin-bottom: 20px;"> <!-- 수평선 추가 -->


            <!-- 수정 가능한데이터  보여주기 -->
            
            <!--
            <label class="input input-bordered flex items-center gap-2">
                사용여부 :
                <select name = "사용여부" class="ml-2" bind:value={result_dict.사용여부}>
                    <option value="true">사용</option>
                    <option value="false">사용 안함</option>
                </select>
            </label>
            -->
            <label class="input input-bordered flex items-center gap-2">
                서비스명 :
                <input type="text" class="grow" value={result_dict.service_name} placeholder="Daisy" />
            </label>
            <label class="input input-bordered flex items-center gap-2">
                고객명 :
                <input type="text" class="grow" value={result_dict.customer_name} placeholder="Daisy" />
            </label>
            <label class="input input-bordered flex items-center gap-2">
                비밀번호 :
                <input type="text" class="grow" value={result_dict.pwd} placeholder="Daisy" />
            </label>
            <label class="input input-bordered flex items-center gap-2">
                만료 날짜 :
                <input type="text" name="valid_date" class="grow" value={result_dict.valid_date} placeholder="Daisy" />
            </label>

            <label class="input input-bordered flex items-center gap-2" style="height: 100px">
                <span>memo :</span>
                <textarea id = "memo" name = "memo" class="grow w-full self-stretch" rows="5">{result_dict.memo}</textarea>
            </label>

            <div class="flex justify-center pt-10"> <!-- pt-10으로 변경 -->
                <button class="btn btn-primary w-full" type = "submit">수정</button>
            </div>
        </div>

        

    </form>

    

{/if}
  