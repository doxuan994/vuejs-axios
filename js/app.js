new Vue({
  el: "#app",
  data: {
    info: null,
    loading: true,
    errored: false,
    posts: [],
    errors: [],
    quoteBody: '',
    quoteAuthor: '',
    quoteId: '',
    quoteLink: '',
  },
  methods: {
    newQuote() {
      axios.get('http://quotes.stormconsultancy.co.uk/random.json')
      .then(response => {
        // JSON responses are automatically parsed.
        this.quoteBody = response.data.quote;
        this.quoteAuthor = response.data.author;
        this.quoteLink = response.data.permalink;
        this.quoteId = response.data.id;
      })
      .catch(e => {
        console.log(e);
      })
    }
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



    axios.get('http://quotes.stormconsultancy.co.uk/random.json')
    .then(response => {
      // JSON responses are automatically parsed.
      this.quoteBody = response.data.quote;
      this.quoteAuthor = response.data.author;
      this.quoteLink = response.data.permalink;
      this.quoteId = response.data.id;
    })
    .catch(e => {
      console.log(e);
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
