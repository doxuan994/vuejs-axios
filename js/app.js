new Vue({
  el: "#app",
  data: {
    info: null,
    loading: true,
    errored: false,
    posts: [],
    errors: [],
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data;
    })
    .catch(e => {
      this.errors.push(e);
    })
  },
  mounted () {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      this.info = response.data.bpi
    })
    .catch(error => {
      console.log(error);
      this.errored = true;
    })
    .finally(() => this.loading = false);
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2);
    }
  },
});
