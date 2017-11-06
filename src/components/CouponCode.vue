<template>
    <div>
        
        <input class="coupon-code" v-model="code" @input="validate" />
        <p v-text="feedback"></p>
        
    </div>
   
</template>

<script>
    export default {

        data(){
            return {
                code: '',
                coupons: [
                    {
                        code: '50OFF',
                        message: '50% Off!',
                        discount: 50
                    },
                    {
                        code: 'FREE',
                        message: 'Entirely Free',
                        discount: 100
                    }
                ],
                valid: false,
            };
        },

        computed: {
            selectedCpupon(){
                return this.coupons.find(coupon => coupon.code == this.code);
            },

            message(){
                return this.selectedCpupon.message;
            },

            feedback(){
                if(this.valid){
                    return `Coupon Redeemed: ${ this.message }`;
                }

                return 'Invalid Coupon code';
            }
        },

        methods:{

            validate(){
                this.valid = !! this.selectedCpupon;

                if(this.valid){
                    this.$emit('applied', this.selectedCpupon.discount  );
                }
            }

        }

     
    }
</script>