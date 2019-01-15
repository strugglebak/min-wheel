<template>
    <div class="input-wrapper"
        v-bind:class="{error: error, info: info}">
        <input v-bind:type="type"
            v-bind:value="value"
            v-bind:placeholder="placeholder"
            v-bind:disabled="disabled"
            v-bind:readonly="readonly">
        <template>
            <mw-icon v-if="error && !info" name="error" class="icon"></mw-icon>
            <span class="message">{{error}}</span>
            <mw-icon v-if="info && !error" name="info" class="icon"></mw-icon>
            <span class="message">{{info}}</span>
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
       value: { type: String },
       error: { type: String },
       info: { type: String },
       placeholder: { type: String },
       type: { 
           type: String , default: 'text', 
           validator: function(value) {
               return value === 'text' || value === 'password'
           }
       },
       disabled: { type: Boolean, default: false },
       readonly: { type: Boolean, default: false }
   } 
}
</script>
<style lang="scss" scoped>
    $font-size: 14px;
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
            &[disabled], &[readonly] { border-color: #bbbbbb; color: #bbbbbb; cursor: not-allowed; box-shadow: none; } 
        }
        
        > .icon { margin-left: 3px; margin-right: 3px; }

        &.error {
            > input { border-color: #F1453D; }
            > .icon { fill: #F1453D; }
            > .message { color: #F1453D; }
        }

        &.info {
            > input { border-color: #729d39; }
            > .icon { fill: #729d39; }
            > .message { color: #729d39; }
        }
    } 
</style>
