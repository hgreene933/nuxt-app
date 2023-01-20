<script setup lang="ts">
const form = reactive({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    newsletter: false,
    howAreYouFeeling: "undecided"
});

const errorMsgs = reactive({
    firstName: "",
    lastName: "",
    email: "",
    comment: ""
})

const formSubmitting = ref(false);
const submitted = ref(false);

async function submitForm() {
    formSubmitting.value = true;
    const submission = await $fetch("/api/contact", {
        method: "post",
        body: form
    }).catch((error) => { console.log(error.statusMessage); formSubmitting.value = false });

    console.log(submission);

    formSubmitting.value = false;
    submitted.value = true;
}

watchEffect(() => {
    if (form.firstName === "not a name") {
        errorMsgs.firstName = "Please enter your first name";
    }
});
</script>

<template>
    <div>
        <h1>Contact Us</h1>

        <p>Fill out the form below to engage with us in an engaging manner.</p>

        <form action="/api/contact" method="post" class="contact-form" @submit.prevent="submitForm" :class="formSubmitting" v-if="!submitted" novalidate>
            <div class="input-wrap">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="form.firstName" name="firstName" required>
                <span class="error" v-show="errorMsgs.firstName">{{ errorMsgs.firstName }}</span>
            </div>

            <div class="input-wrap">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" v-model="form.lastName" name="lastName" required>
                <span class="error" v-show="errorMsgs.lastName">{{ errorMsgs.lastName }}</span>
            </div>

            <div class="input-wrap">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" name="email" required>
                <span class="error" v-show="errorMsgs.email">{{ errorMsgs.email }}</span>
            </div>

            <div class="input-wrap">
                <label for="comment">Comment</label>
                <textarea id="comment" v-model="form.comment" name="comment" required />
                <span class="error" v-show="errorMsgs.comment">{{ errorMsgs.comment }}</span>
            </div>

            <div class="input-wrap--checkbox">
                <input type="checkbox" id="newsletter" value="false" v-model="form.newsletter" name="newsletter" required>
                <label for="newsletter">Sign up for our wonderful newsletter</label>
            </div>

            <HowYouFeeling  v-model:how-are-you-feeling="form.howAreYouFeeling"/>

            <button type="submit">Submit</button>
        </form>

        <div class="form-submitted" v-else>
            Thanks for contacting us! We appreciate you, {{ form.firstName }} {{ form.lastName }}.
        </div>

        <LazyFormSpinner v-if="formSubmitting">Submitting</LazyFormSpinner>
    </div>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
}

legend {
    margin-bottom: 15px;
}

.input-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-wrap--checkbox{
    display: flex;
    gap: 20px;
}

input {
    width: 25%;
}

input[type=checkbox],
input[type=radio] {
    width: auto;
}

textarea {
    width: 50%;
}

button {
    width: 25%;
    background-color: cornflowerblue;
}

.error {
    background-color: tomato;
    padding: 10px 25px;
    width: 25%;
}

.formSubmitting {
    opacity: .6;
}
</style>
