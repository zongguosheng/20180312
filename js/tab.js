function getID(ID) {return document.getElementById(ID);}
function Ds(i) {getID(i).style.display = '';}
function Dh(i) {getID(i).style.display = 'none';}

//判断选中的是哪个选项卡
function Tb(d, t, p, c) {
	//d:当前选项卡编号，t:选项卡元素数目，p:选项卡名称，c:选项卡样式表	
	for(var i=1; i<=t; i++) {
		if(d == i) 
		{
			getID(p+'_t_'+i).className = c+'_2'; Ds(p+'_c_'+i);
		} 
		else {
			getID(p+'_t_'+i).className = c+'_1';Dh(p+'_c_'+i);
			 }
	}
}
//显示指定序号的元素，其他元素隐藏。
function Sc(d,t,p)
{
	for(var i=1; i<=t; i++) {
		if(d == i) {
			Ds(p+'_'+i);
		  }
	    else {
			Dh(p+'_'+i);
			}
	}
}