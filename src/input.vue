<template>
    <div class="input-wrapper"
        v-bind:class="{error: error, info: info, [`align-${alignment}`]:true}">
        <label v-if="name">{{name}}</label>
        <input v-bind:type="type"
            v-bind:value="value"
            v-bind:placeholder="placeholder"
            v-bind:disabled="disabled"
            v-bind:readonly="readonly"
            v-on:change="$emit('change', $event.target.value)"
            v-on:input="$emit('input', $event.target.value)"
            v-on:focus="$emit('focus', $event.target.value)"
            v-on:blur="$emit('blur', $event.target.value)"
            >
        <template>
            <div>
                <mw-icon v-if="error && !info" name="error" class="icon"></mw-icon>
                <span v-if="error" class="describe">{{error}}</span>
                <mw-icon v-if="info && !error" name="info" class="icon"></mw-icon>
                <span v-if="info" class="describe">{{info}}</span>
            </div>
       </template>
    </div>    
</template>
<script>
import Icon from './icon'
export default {
   name: 'MwInput',
   components: {
       'mw-icon': Icon
   },
   props: {
       name: { type: String },
       alignment: { 
            type: String, default: 'horizontal', 
            validator: function (value) {
                return value === 'horizontal' || value === 'vertical';
            }
       },
       value: { type: String },
       error: { type: String },
       info: { type: String },
       placeholder: { type: String },
       type: { 
           type: String , default: 'text', 
           validator: function(value) {
               return ['text', 'password'].includes(value);
           }
       },
       disabled: { type: Boolean, default: false },
       readonly: { type: Boolean, default: false }
   } 
}
</script>
<style lang="scss" scoped>
    $font-size: 12px;
    $label-font-size: 14px;
    $input-height: 32px;
    $input-width: 128px;
    $input-padding: 8px;
    $input-bg-color: #FFFFFF;
    $input-border: 1px solid #C8C8C8;
    $input-border-radius: 4px;
    $input-hover-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    $input-focus-box-shadow: inset 0px 1px 3px #dfdfdf;
    $input-hover-border-color: #666666;
    .input-wrapper { font-size: $font-size; display: inline-flex; align-items: center; margin-right: 0.5em;
        > :last-child { margin-right: 0; }
        > input { font-size: inherit; width: $input-width; height: $input-height; padding: $input-padding; background-color: $input-bg-color; border: $input-border; border-radius: $input-border-radius;

            &:hover { border-color: $input-hover-border-color; box-shadow: $input-hover-box-shadow; }
            &:focus { outline: none; box-shadow: $input-focus-box-shadow; }
            &[disabled], &[readonly] { background-color: #dddddd; border-color: #bbbbbb; color: #bbbbbb; cursor: not-allowed; box-shadow: none; } 
        }
        > label { font-size: $label-font-size; margin: 0 8px; }
        > div { margin: 0 3px; }

        &.error {
            > input { border-color: #F1453D; }
            > div .icon { fill: #F1453D; }
            > div .describe { color: #F1453D; }
        }

        &.info {
            > input { border-color: #729d39; }
            > div .icon { fill: #729d39; }
            > div .describe { color: #729d39; }
        }
        &.align-horizontal { flex-direction: row; }
        &.align-vertical { flex-direction: column; align-items: flex-start;
            > label { margin: 8px 0; }
            > div { margin: 4px 0; }
        }
    } 
</style>
