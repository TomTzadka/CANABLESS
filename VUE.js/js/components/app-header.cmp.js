export default {
    template: `
        <section class="header">
        <div class="logo" >
        <img src="img/logo.png" alt="1">
        CANABLESS</div>
        
        <span class="hello-user" >Hello {{userName}}!</span>
        <h2>How are you?</h2>
        
        </section>
      `,
    props: {
        userName: {
            type: String,
        }
    },
};