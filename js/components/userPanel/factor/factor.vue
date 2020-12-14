<template>
    <div id="factor" class="userPanelItem panelItem">
        <div id="factorWrapper">
            <div class="chooseLogo">
                <label for="logoImage">لوگوی شرکت خود را وارد کنید</label>
                <div @click="openFile" class="preview">
                    <img ref="logoImagePreview" src="" alt="">
                    <p ref="chooseMessage">برای انتخاب لوگو کلیک کنید</p>
                    <input @change="imageChanged" accept="image/*" ref="logoFile" type="file" name="" id="logoImage">
                </div>
            </div>
            <div class="inputs">
                <div class="singleInput">
                    <label for="compponyPersianName">:نام شرکت خود</label>
                    <input v-model="componyName" placeholder="نام شرکت به فارسی" type="text" id="compponyPersianName">
                </div>
                <div class="singleInput">
                    <button class="submit">ساخت پیش فاکتور</button>
                </div>
            </div>
            <div class="factorFill">
                <div class="factorFillWrapper">
                    <div id="factorHeader">
                        <div id="factorHeaderWrappepr">
                            <div id="topOfHeaderWrapper">
                                <div class="title">
                                    <h1>پیش فاکتور</h1>
                                </div>
                                <div class="imgAndName">
                                    <img ref="logoInFactor" alt="">
                                    <p>{{ componyName }}</p>
                                </div>
                            </div>
                            <div class="bottomOfHeaderWrapper">
                                <div class="factorDate">
                                    <div class="datePickerWrapper">
                                        <date-picker v-model="date" :clearable="true"></date-picker>
                                        <p>:تاریخ</p>
                                    </div>

                                </div>
                                <div class="factorNumber">
                                    <input type="text">
                                    <p>:شماره پیش فاکتور </p>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="factorBody">
                        <div class="factorBodyWrapper">
                            <div class="bodyDescs">
                                <div class="factorFor row">

                                    <input type="text" placeholder="نام">
                                    <p>:پیش فاکتور برای</p>
                                </div>
                                <div class="customerComponyName row">

                                    <input type="text" placeholder="نام شرکت">
                                    <p>:نام شرکت</p>
                                </div>
                                <div class="customerPhoneNumber row">

                                    <input type="text" placeholder="َماره تماس">
                                    <p>شماره تماس</p>
                                </div>
                                <div class="row bodyLongDescs">
                                    <p>
                                        احتراما با توجه به درخواست جنابعالی پیش فاکتور <input type="text"
                                                                                              placeholder="نام محصول">
                                        خدمتتان تقدیم میگردد
                                    </p>
                                </div>
                            </div>
                            <div class="factorTable">
                                <div class="table">
                                    <table>
                                        <tr>
                                            <th class="allVahed">
                                                قیمت کل
                                                <br>
                                                (ریال)
                                            </th>
                                            <th class="vahed">
                                                قیمت واحد
                                                <br>
                                                (ریال)
                                            </th>
                                            <th class="count" style="width: 50px">تعداد</th>
                                            <th class="productTable" style="width: 450px">عنوان</th>
                                            <th class="rowNumber">شماره</th>
                                        </tr>

                                        <tr class="bodyItem" v-for="r in getRows">
                                            <td class="wholePrice" style="background: rgb(237,239,236)">
                                                <input @keydown="prevent($event)" type="text" placeholder="هزینه کل">
                                            </td>
                                            <td>
                                                <input @keydown="prevent($event)" type="text" placeholder="قیمت واحد">
                                            </td>
                                            <td class="countInput" style="background: rgb(237,239,236)">
                                                <input @keydown="prevent($event)" type="text" placeholder="تعداد">
                                            </td>
                                            <td>
                                                <textarea placeholder="نام محصول"></textarea>
                                            </td>
                                            <td style="background: rgb(237,239,236)">{{getRowNumberFromId(r.id)}}</td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div class="sums">
                                <div class="sumsWrapper">
                                    <div class="sumNumberToText">
                                        <p v-if="!warning">
                                            <button @click="calc" class="submit">محاسبه قیمت کل</button>
                                            قیمت کل به حروف: {{ getPriceToTe() }} ریال
                                        </p>
                                        <p class="warning" v-if="warning"> <button @click="calc" class="submit"> محاسبه قیمت کل </button> عدد بسیار بزرگ است </p>
                                    </div>
                                </div>
                            </div>
                            <div class="factorDescs">
                                <p class="hint">:توضیحات فاکتور</p>
                                <div class="factorDescsWrapper">
                                    <textarea id="editor" name="product-description"></textarea>
                                </div>
                            </div>
                            <div class="provider">
                                <div class="providerWrapper">
                                    <p> <input type="text">:مدیر فروش</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
import Num2persian from 'num2persian';

export default {
    name: "factor",
    data() {
        return {
            componyName: null,
            wholePriceToText: null,
            date: null,
            warning:false,
            rows:[{id:1},{id:2}]
        }
    },
    components: {
        datePicker: VuePersianDatetimePicker
    },
    computed:{
        getRows(){
            return this.rows
        }
    },
    mounted() {
        this.init()

        window.addEventListener('click',()=>{
            const newObj={id:4}
            this.rows.push(newObj)
        })
    },
    methods: {
        getRowNumberFromId(id){
            const index=this.rows.findIndex(row=>{
                return row.id==id
            })
            return index+1
        },
        init() {
            tinymce.init({
                content_style:
                    `
            body * { font-family: 'iranSans' !important;font-size:16px !important;font-weight:normal;color:black !important;background-color:transparent !important }
            p{ color:black !important}
            p strong,p a,a p{ color:black !important}

            `
                ,
                setup: function (editor) {
                    /* example, adding a group toolbar button */
                    editor.ui.registry.addGroupToolbarButton("alignment", {
                        icon: "align-left",
                        tooltip: "Alignment",
                        items: "alignleft aligncenter alignright | alignjustify",
                    });
                },
                language: "fa",
                selector: "#editor",
                plugins: "image code table lists link",
                toolbar:
                    "undo redo  | forecolor backcolor numlist bullist alignment bold | formatselect",
                block_formats: 'h2=h2;h3=h3;h4=h4;h5=h5;h6=h6;p=p',
                table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',


                menubar: "",
                width: "100%",
                height: '400px',
                images_upload_url: "/test",
                image_title: true,
                automatic_uploads: true,
                file_picker_types: "image",
                file_picker_callback: function (cb, value, meta) {
                    var input = document.createElement("input");
                    input.setAttribute("type", "file");
                    input.setAttribute("accept", "image/*");

                    input.onchange = function () {
                        var file = this.files[0];

                        var reader = new FileReader();
                        reader.onload = function () {
                            var id = "blobid" + new Date().getTime();
                            var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                            var base64 = reader.result.split(",")[1];
                            var blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);

                            cb(blobInfo.blobUri(), {title: file.name});
                        };
                        reader.readAsDataURL(file);
                    };

                    input.click();
                },
                images_upload_handler: function (blobInfo, success, failure, progress) {
                    var xhr, formData;

                    xhr = new XMLHttpRequest();
                    xhr.withCredentials = false;
                    xhr.open("POST", "/test");

                    xhr.upload.onprogress = function (e) {
                        progress((e.loaded / e.total) * 100);
                    };

                    xhr.onload = function () {
                        var json;

                        if (xhr.status < 200 || xhr.status >= 300) {
                            failure("HTTP Error: " + xhr.status);
                            return;
                        }

                        json = JSON.parse(xhr.responseText);

                        if (!json || typeof json.location != "string") {
                            failure("Invalid JSON: " + xhr.responseText);
                            return;
                        }

                        success(json.location);
                    };

                    xhr.onerror = function () {
                        failure(
                            "Image upload failed due to a XHR Transport error. Code: " +
                            xhr.status
                        );
                    };

                    formData = new FormData();
                    formData.append("file", blobInfo.blob(), blobInfo.filename());

                    xhr.send(formData);
                },
            });
        },
        getPriceToTe() {
            return Num2persian(+this.wholePriceToText)
        },
        prevent(e) {
            console.log(e)
            const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','Backspace']

            if (e.key == 'Control' || e.key == 'Shift' || e.key == 'F5') {
                return
            }
            if (!(nums.includes(e.key))) {
                e.preventDefault()
            }
        },
        calc() {
            const allWholeInputs = document.querySelectorAll('.wholePrice input')
            this.wholePriceToText = 0
            allWholeInputs.forEach(inp => {
                if (inp.value.trim() == "" || inp.value == null) {
                    return
                }
                const value = inp.value

                this.wholePriceToText += +value
            })
            if(+this.wholePriceToText>Number.MAX_SAFE_INTEGER){
                this.warning=true
            }
        },
        openFile() {
            const file = this.$refs.logoFile
            file.click()
        },
        imageChanged(e) {
            const clickedInput = e.target;
            var reader = new FileReader();
            let output = this.$refs.logoImagePreview;

            reader.onload = () => {
                output.src = reader.result;
                this.$refs.logoInFactor.src = reader.result
            };
            reader.readAsDataURL(e.target.files[0]);
            output.style.display = "block";
            this.$refs.chooseMessage.style.display = 'none'
            output.style.display = "block"
        },
    }
}
</script>

<style scoped>

#factor {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
}

#factorWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.chooseLogo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.preview {
    width: 200px;
    height: 200px;
    border: 1px dashed black;
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.preview input[type=file] {
    display: none;
}

.preview img {
    width: 180px;
    height: 180px;
    display: none;
}

.singleInput {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 20px;
}

.singleInput input {
    margin-right: 20px;
}

.factorFill {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    margin-top: 50px;
    overflow: auto;
    overflow-y: hidden;
}

#factorHeader {
    background: rgb(230, 230, 230);
    padding: 30px 0;
    padding-bottom: 0;
}

.factorFillWrapper {
    min-width: 1000px;
}

#factorHeaderWrappepr {
    display: flex;
    flex-direction: column;
}

#topOfHeaderWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.title {
    margin-right: 0;
    font-size: 30px;
    color: black;
    height: max-content;
    position: relative;
    right: 20px;
}

.title h1 {
    max-width: 137px;
    word-break: break-word;
    position: relative;
    right: 80px;
}

.imgAndName {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.imgAndName p {
    margin-top: 10px;
    font-weight: bold;
}

.imgAndName img {
    width: 150px;
    height: 150px;
}

.factorNumber {
    background: rgb(43, 124, 255);
    padding: 10px;
    width: 400px;
    display: flex;
    align-items: center;
}

.factorDate {
    position: relative;
    left: 120px;
}

.factorNumber p {
    color: white;
    word-spacing: 10px;
    font-weight: bold;
}

.bottomOfHeaderWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.datePickerWrapper {
    display: flex;
    align-items: center;
}

.factorBodyWrapper,
.bodyDescs {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.row {
    display: flex;
    align-items: center;
}

.row p {
    order: 2;
    width: 130px;
    font-weight: bold;
}

.row input {
    order: 1;
}

.factorBody {
    padding-top: 20px;
}

th, th p {
    vertical-align: middle;
    color: white;
    font-weight: bold !important;
}

.count, .vahed, .allVahed {
    color: black;
    background: rgb(230, 230, 230);
}

.count {
    width: 100px !important;
}

.vahed, .allVahed {
    width: 200px !important;
}

.rowNumber {
    width: 50px;
}

.bodyLongDescs p {
    width: 100%;
}

table tr:first-child {
    border-bottom: 8px solid #ffffff;
}

.table .rowNumber, .productTable {
    background: rgb(45, 124, 255);
}

.bodyItem:not(:last-child) {
    border-bottom: 2px solid rgb(166, 166, 164);
}

.bodyItem input {
    margin-right: 0;
    width: 150px;
}

.countInput input {
    width: 75px;
}

.bodyItem textarea {
    height: 50px;
}

textarea {
    margin-top: 7px;
}
.sums{
    margin-top: 20px;
}
.sumNumberToText .submit {
    padding: 5px;
    font-size: 10pt;
}
.factorDescs{
    margin-top: 20px;
    width: 100%;
}
.hint{
    font-weight: bold;
}
.provider{
    margin-top: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.provider .providerWrapper{
    border-top: 2px solid rgb(59,59,59);
    padding-top: 5px;
}
.warning{
    color: #c15555
}
</style>