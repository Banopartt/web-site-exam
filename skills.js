const Texts = [
    "HTML","CSS","C++","NODE JS","JS","JAVA","TYPE SCRIPT","PYTHON",
    "HTML","CSS","C++","NODE JS","JS","JAVA","TYPE SCRIPT","PYTHON",
    "HTML","CSS","C++","NODE JS","JS","JAVA","TYPE SCRIPT","PYTHON",
]



var tagCloud = TagCloud(".Sphere", Texts,{
            radius: 230,
            maxSpeed: 'normal',
            initSpeed: 'fast',
            direction: 135,
            keep: true
})
var color = '#FF5733';
document.querySelector('.Sphere').style.color = color;