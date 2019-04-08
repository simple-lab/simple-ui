"use strict;"

/*
    진행 목록
    1. 페이지 닫기
    2. GET Parameter로 전달된 값을 페이지에 디스플레이
    3. 사진 가져오기 버튼 클릭해서 내 디바이스의 이미지 가져오기

    페이지 닫을 때 이동할 주소는 다음과 같습니다 :  uniwebview://MMNPCPage?Command=EXIT
    페이지 열 때 파라미터는 요런 식으로 : https://devcat.com?Token={UrlEncodedText}
*/

// [1] 페이지 닫기
var pageExitButton = document.getElementById("pageExitButton");
pageExitButton.onclick = function () {
    location.href="uniwebview://MMNPCPage?Command=EXIT";
}

// [2] GET Parameter로 전달된 값을 페이지에 디스플레이하기
var token = new URLSearchParams(location.search).get("Token");
var dataLabel = document.getElementById("dataLabel");
dataLabel.textContent = `Token: ${token}`;


// [3] 사진 가져오기 버튼 클릭해서 내 디바이스의 이미지 가져오기
var fileDialog = document.createElement("input");
fileDialog.type = "file";

fileDialog.addEventListener("change", function(event) {
    var file = fileDialog.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        imageViewer.src = reader.result;
    }
});

var loadImageButton = document.getElementById("loadImageButton");
var imageViewer = document.getElementById("imageViewer");

loadImageButton.addEventListener("click", function(event) {
    fileDialog.click();
}, false);