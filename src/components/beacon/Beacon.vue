<template>
    <div class="beacon">
        <div class="button-area">
            <button class="trigger-button" :class="showForm ? 'close' : ''" @click="onClick"></button>
        </div>
        <div class="form-area" :class="showForm ? 'show' : ''">
            <div class="contact-form" :class="showForm ? 'show' : ''">
                <el-form>
                    <p style="height: auto;">Questions related to lessons should be added as comments on the lesson itself.</p>
                    <el-form-item>
                        <el-input placeholder="Email Address"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="textarea" placeholder="How can we help you?"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="float: right">Send</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        showForm: false
    }),
    methods: {
        onClick() {
            this.showForm = !this.showForm;
        }
    }
};
</script>

<style lang="scss">
.beacon {
    .button-area {
        background: transparent;
        border: none;
        bottom: 12px;
        height: 80px;
        position: fixed;
        right: 18px;
        top: auto;
        width: 80px;
        z-index: 1050;
    }
    .trigger-button {
        background-color: #ef494f;
        border: 0;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
        border-radius: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 30px;
        display: block !important;
        position: absolute;
        bottom: 12px;
        right: 12px;
        height: 54px;
        width: 54px;
        transition: all .2s ease-out;
        outline: 0;
        cursor: pointer;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA3lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ymXGKAAAASXRSTlMAAQIFBwoPEBIUFRscHR8jKCkqLC0/Q0RGSEpNUFFXYHFzeXp9gIKFjKCjpamwvL7Aw8bIy8zN0NLT1dja3ODk5ujq7PT19/3+6Nyy9QAAAklJREFUeAGl1/1W4jwQBvAHBapi0erLK7XsKmLxAyp+SBEVAUXluf8b2ibHnqUk0LT7+3+anJlpMoGe1Wh3B9MZOZsOuu2GBWN2q//NhO9+y4YJtzenxrznIs1xyJXCY6xTDfhj3Gl6jm1ZtuM1O2P+CKpY6eST0sh3kOD4I0qfJ9ArXVG6cwtQFNw7SlclaGzdU3ipY4X6C4X7LSh2n2VN/CJWKvqygs+7yroydlLDWrWJjF5auyT3PKwgRWUod17CIpmrhzJSlR9k1hI1kuuWYaAs116oWFXUd1KBkcpE1LuKWCDyXIOhmsh5gB/HjPgw5jMS93koeqMIY0XRLSEkl5E6Mqgz4kLoiX5G7PKLy74usUT0eQ8Rex5/RviPOodIcknObQAtkqNCtuDCiGQLQF+mOtu2ZcL7gCWq5uCvTWvZJhSO6AwLDZJjZDYm2UCbZAeZdUi20SXZRGZNkl0MSHrIzCM5wFTmKzOH5BQzkjbWlkpXMZvkDIxYgNIkKb1iMfJPwXm3vc2ImjC1w3SNdkDyPW+pXJJPeZvklGSQtz2vSV7k/THeSDaUX9LMPiM7usNALY7ijGSYdgwdQqvwSvJcPQCNgo8Y2VOPXqNt35C81R36m2pPaRf28l03eCQ53Mh30ZXkwrmu2Ph3VC9382BlrMgXrA405sHqKGUerA5x5sHq+GgebDy4/v/IBZlG5qMbJpgP6/tnr0z6MHkmbB+4p9dvXPbxO+sDZehZsYxPI956G/keZQzP95BGfQ7y/Sm4+LUDrT+vKBtiP2phEAAAAABJRU5ErkJggg==);

        &.close {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANBJREFUeNrs2zEKwkAQheHsFmltBO+W2tZL6Fls1INJtBCxS3B9IVNI+p3A8A882K2GL7sQmJBUSmkca6Mk5eXVMDvi9spDeSoHr6bJ8QTvys7WbzvNUMBloxTtiq5SAAECBAgQIECAAAECBAgQIECAAAFWAbbKWRmbebRXK8uq2Ws0UzvNRTvbRKwuB7+mecJdlKsyBIINZroxuuc1ARAgQIAAAQIECBAgQIAAAQIECBDgisD+b/2JCDw28zeDr3LyapqcfyvY2kPtvRr+BBgAr3dW/fZtoWAAAAAASUVORK5CYII=) center center no-repeat #9a9c9d;
            background-size: 30px;
            border-radius: 0 100% 100%;
            transform: rotate(45deg);
        }
    }
    .form-area {
        border: none;
        bottom: 89px;
        height: 0px;
        position: fixed;
        right: 15px;
        top: auto;
        width: 450px;
        z-index: 1050;

        &.show {
            height: 254px;
        }
    }
    .contact-form {
        opacity: 0;
        height: 100%;
        max-height: 218px;
        overflow: auto;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 1px rgba(76, 86, 103, .25), 0 2px 18px rgba(31, 37, 50, .32);
        transition: opacity .2s ease-out, bottom .2s ease-out;

        &.show {
            opacity: 1;
        }
    }
}
</style>
