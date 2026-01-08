var newBtn = document.getElementById('newExpandBtn');
var newBtnDiv = document.getElementById('newExpand')

var menBtn = document.getElementById('menExpandBtn');
var menBtnDiv = document.getElementById('menExpand')

var womenBtn = document.getElementById('womenExpandBtn');
var womenBtnDiv = document.getElementById('womenExpand');

var kidsBtn = document.getElementById('kidsExpandBtn');
var kidsBtnDiv = document.getElementById('kidsExpand');

var saleBtn = document.getElementById('saleExpandBtn');
var saleBtnDiv = document.getElementById('saleExpand');

newBtn.style.textDecoration = '';
menBtn.style.textDecoration = '';
womenBtn.style.textDecoration = '';
kidsBtn.style.textDecoration = '';
saleBtn.style.textDecoration = '';

newBtn.addEventListener('mouseenter', () => {
    newBtnDiv.style.display = 'block';
    newBtn.style.textDecoration = 'underline';
    console.log('show div');

    // newBtnDiv.style.display = 'none';
    menBtnDiv.style.display = 'none';
    womenBtnDiv.style.display = 'none';
    kidsBtnDiv.style.display = 'none';
    saleBtnDiv.style.display = 'none';

    // newBtn.style.textDecoration = '';
    menBtn.style.textDecoration = '';
    womenBtn.style.textDecoration = '';
    kidsBtn.style.textDecoration = '';
    saleBtn.style.textDecoration = '';
});

newBtnDiv.addEventListener('mouseleave', () => {
    newBtnDiv.style.display = 'none';
    newBtn.style.textDecoration = '';
    console.log('Unshow div');

});


menBtn.addEventListener('mouseenter', () => {
    menBtnDiv.style.display = 'block';
    menBtn.style.textDecoration = 'underline';
    console.log('show div');

    newBtnDiv.style.display = 'none';
    // menBtnDiv.style.display = 'none';
    womenBtnDiv.style.display = 'none';
    kidsBtnDiv.style.display = 'none';
    saleBtnDiv.style.display = 'none';

    newBtn.style.textDecoration = '';
    // menBtn.style.textDecoration = '';
    womenBtn.style.textDecoration = '';
    kidsBtn.style.textDecoration = '';
    saleBtn.style.textDecoration = '';
});

menBtnDiv.addEventListener('mouseleave', () => {
    menBtnDiv.style.display = 'none';
    menBtn.style.textDecoration = '';
    console.log('Unshow div');
});


womenBtn.addEventListener('mouseenter', () => {
    womenBtnDiv.style.display = 'block';
    womenBtn.style.textDecoration = 'underline';
    console.log('show div');

    newBtnDiv.style.display = 'none';
    menBtnDiv.style.display = 'none';
    // womenBtnDiv.style.display = 'none';
    kidsBtnDiv.style.display = 'none';
    saleBtnDiv.style.display = 'none';

    newBtn.style.textDecoration = '';
    menBtn.style.textDecoration = '';
    // womenBtn.style.textDecoration = '';
    kidsBtn.style.textDecoration = '';
    saleBtn.style.textDecoration = '';
});

womenBtnDiv.addEventListener('mouseleave', () => {
    womenBtnDiv.style.display = 'none';
    womenBtn.style.textDecoration = '';
    console.log('Unshow div');
});


kidsBtn.addEventListener('mouseenter', () => {
    kidsBtnDiv.style.display = 'block';
    kidsBtn.style.textDecoration = 'underline';
    console.log('show div');

    newBtnDiv.style.display = 'none';
    menBtnDiv.style.display = 'none';
    womenBtnDiv.style.display = 'none';
    // kidsBtnDiv.style.display = 'none';
    saleBtnDiv.style.display = 'none';

    newBtn.style.textDecoration = '';
    menBtn.style.textDecoration = '';
    womenBtn.style.textDecoration = '';
    // kidsBtn.style.textDecoration = '';
    saleBtn.style.textDecoration = '';
});

kidsBtnDiv.addEventListener('mouseleave', () => {
    kidsBtnDiv.style.display = 'none';
    kidsBtn.style.textDecoration = '';
    console.log('Unshow div');
});


saleBtn.addEventListener('mouseenter', () => {
    saleBtnDiv.style.display = 'block';
    saleBtn.style.textDecoration = 'underline';
    console.log('show div');

    newBtnDiv.style.display = 'none';
    menBtnDiv.style.display = 'none';
    womenBtnDiv.style.display = 'none';
    kidsBtnDiv.style.display = 'none';
    // saleBtnDiv.style.display = 'none';

    newBtn.style.textDecoration = '';
    menBtn.style.textDecoration = '';
    womenBtn.style.textDecoration = '';
    kidsBtn.style.textDecoration = '';
    // saleBtn.style.textDecoration = ''; 
});

saleBtnDiv.addEventListener('mouseleave', () => {
    saleBtnDiv.style.display = 'none';
    saleBtn.style.textDecoration = '';
    console.log('Unshow div');
});