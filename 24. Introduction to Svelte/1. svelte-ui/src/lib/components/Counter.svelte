<script>
    let count = $state({
        value: 0,
        note: "single digits",
    });
    
    const incrementCount = () => {
        count.value++;
        if (count.value > 9) {
            count.note = "not single digits";
        }
    }
</script>
<p>Count: {count.value} ({count.note})</p>
<button onclick={incrementCount}>Increment</button>