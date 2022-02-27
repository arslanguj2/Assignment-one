<template>
    <div class="form-check">
        <input class="form-check-input" :name="name" :type="type" :value="value" @input="onInput" :id="inputId" />
        <label class="form-check-label" :for="inputId"> {{ label }} </label>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "checkbox",
            validator: (value) => value === "checkbox" || value === "radio",
        },
        value: {
            type: [String, Number],
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        inputId: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: "",
        },
    },

    methods: {
        onInput(event) {
            this.$emit("input", event.target.value);
        },
    },
};
</script>

<style scoped>
.form-check-input:active {
    filter: brightness(100%);
}

.form-check-input:focus {
    border-color: #000000;
    outline: 0;
    box-shadow: none;
}

.form-check-input {
    border: 2px solid #000000;
    border-radius: 0% !important;
    width: 1.3em;
    height: 1.3em;
}

.form-check-input:checked[type="radio"],
.form-check-input:checked[type="checkbox"] {
    background-image: url(../../../assets/images/check.svg) !important;
}

input[type="checkbox"i]:focus-visible {
    outline-offset: 0px;
}
</style>
