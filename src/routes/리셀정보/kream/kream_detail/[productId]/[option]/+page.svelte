<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>
<script>
    /** @type {import('./$types').PageData} */
    export let data;

    // [현재 페이지 파라미터 받아오기]
    import { page } from '$app/stores'; 
    let productId = $page.params.productId;
    let option = $page.params.option;


</script>


<!---------------------------------------------------------->
<!------------------ ⬇⬇⬇ HTML 영역 ⬇⬇⬇ ------------------>

<p>디테일 페이지다{productId}, {option}</p>