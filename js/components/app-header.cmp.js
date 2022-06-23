export default {
    template: `
        <section class="header">
            <div class="logo" >
                <img src="img/logo.png" alt="1">CELLOTEX
            </div>
        
            <h3 class="hello-user">Hello {{userName}}!</h3>
            <h2>How are you?</h2>
        </section>
      `,
    props: {
        userName: {
            type: String,
        }
    },
};