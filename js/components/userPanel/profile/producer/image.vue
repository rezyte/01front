<template>
    <div id="profileImage">
        <div id="imageWrapper">
            <div id="topOfImage">
                <div id="topOfImageWrapper">
                    <button class="submit" @click.prevent="changeImage">انتخاب عکس</button>
                    <input accept="image/*" ref="imageInput" type="file" name="profile-picture" style="display: none"
                           @change="changeImageNow($event)">
                    <img ref="outPut" :src="getSrc">
                    <div class="descs">
                        <div class="myProds field">
                            <p>محصولات من</p>
                            <p>{{ dets.products_count }}</p>
                        </div>
                        <div class="myProds field">
                            <p>مشتریان تایید شده</p>
                            <p>{{ dets.customers_count }}</p>
                        </div>
                    </div>
                    <div id="profileCustomers">
                        <div id="singleProfileCustomers">
                            <div class="singleCustomer" v-for="(singleDet,i) in getDets">
                                <div class="title">
                                    <div class="status">
                                        <p>در انتظار تایید</p>
                                    </div>
                                    <a href="">{{ singleDet.product.title}}</a>
                                </div>
                                <p>{{singleDet.extra_discription}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "images",
    props: ['profile', 'dets', 'orders'],
    mounted() {
        console.log(this.profile)
    },
    methods: {
        changeImage() {
            const fileInput = this.$refs.imageInput
            fileInput.click()
        },
        changeImageNow(e) {
            const input = this.$refs.imageInput
            const output = this.$refs.outPut
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function () {
                    output.src = reader.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    },
    computed: {
        getSrc() {
            if (this.profile.profile_picture !== null) {
                return this.profile.profile_picture
            }
            return '/images/defUser.png'
        },
        getDets() {
            return this.orders
        }
    }
}
</script>

<style scoped>
img {
    max-width: 350px;
    width: 100%;

}

#topOfImageWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.descs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 350px;
}

.field {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    font-weight: bold;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}

.singleCustomer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

a, p, input, textarea {
    text-align: right;
}

#profileCustomers {
    margin-top: 50px;
    max-width: 350px;
    width: 100%
}

.status {
    background: rgb(255, 204, 0);
    padding: 5px;
    border-radius: 20px;
}

.singleCustomer {
    margin-top: 20px;
}

.submit {
    margin-bottom: 20px;
}

a {
    color: #0074d9;
    max-width:253px
}
#profileImage{
    grid-area: profileImage;
}
</style>