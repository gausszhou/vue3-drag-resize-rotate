<template>
    <div class="markdown-render" id="write" v-html="state.markdownHTML"></div>
    {{ src }}
</template>

<script setup>
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import http from "@/api/http";
import { onMounted, reactive, watch } from "vue";

let markdownRender = null;

const state = reactive({
    markdownHTML: String
})

const props = defineProps({
    src: String
})


onMounted(() => {
    createMarkdownRender();
    getMarkdown(props.src)
})


watch(() => props.src, (newSrc) => {
    getMarkdown(newSrc)
})

function createMarkdownRender() {
    markdownRender = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    let preCode = hljs.highlight(str, {language: lang, ignoreIllegals: true}).value;
                    return preCode;
                } catch (e) { console.log(e) }
            }
        }
    });
} 
function getMarkdown(path) {
    let params = path.slice(1);
    console.log(params)
    http.getMarkdown(params).then(res => {
        state.markdownHTML = markdownRender.render(res.data);
    });
}


</script>