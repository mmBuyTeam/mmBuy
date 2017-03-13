(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!

	var app=angular.module("todos",[]);
	app.controller('todosController',['$scope','$location',function($scope,$location){
		//功能一 显示数据列表
		console.log($location.url());
		 $scope.tasks=[
			{id:1,name:'吃饭',completed:true},
			{id:2,name:'睡觉',completed:true},
			{id:3,name:'学习',completed:false},
			{id:4,name:'上网',completed:false},
			{id:5,name:'写代码',completed:true},
		];
		
		//功能二  暴露数据模型
		$scope.newTask = '';
		$scope.add=function(){
			if(!$scope.newTask){
				return;
			}
			var id;
			if($scope.tasks.length===0){
				id=1;
			}else{
				var id=$scope.tasks[$scope.tasks.length-1].id+1;
			}
			$scope.tasks.push({id:id,name:$scope.newTask,completed:true});
			$scope.newTask="";
		}

		// 功能三 删除任务
		$scope.remove=function(id){
			for(var i=0;i<$scope.tasks.length;i++){
				var item=$scope.tasks[i];
				if(item.id==id){
					$scope.tasks.splice(i,1);
					return;
				}
			}
		}

		// 功能四 修改任务
		$scope.isEditingId=-1;
		$scope.edit=function(id){
			console.log(111);
			$scope.isEditingId=id;
		}
		$scope.save=function(){
			$scope.isEditingId=-1;
		}

		// 功能五 切换任务是否完成的状态
		// 用ng-modul绑定completed属性
		// 功能六 批量切换任务是否完成的状态
		$scope.isSeleted=false;
		$scope.toggleAll=function(){
			for(var i=0;i<$scope.tasks.length;i++){
				var item=$scope.tasks[i];
				item.completed=$scope.isSeleted;
			}
		}
		// 功能七 批量删除已完成
		// $scope.clearCompleted=function(){
		// 	for(var i=0;i<$scope.tasks.length;i++){
		// 		var item=$scope.tasks[i];
		// 		if(item.completed){
		// 			$scope.tasks.splice(i,1);
		// 		}
		// 	}
		// }
			$scope.clearCompleted=function(){
				var temp=[];
				for(var i=0;i<$scope.tasks.length;i++){
					var item=$scope.tasks[i];
					if(!item.completed){
						temp.push(item);
					}
				}
				$scope.tasks=temp;
			}


			// 功能7.1  清除已完成按钮隐藏显示
			$scope.isShow=function(){
				for(var i=0;i<$scope.tasks.length;i++){
					var item=$scope.tasks[i];
					if(item.completed){
						return true;
					}
				}
				return false;
			}


			//功能八 显示未完成的数据条数
			$scope.unCompleted=function(){
				var count=0;
				for(var i=0;i<$scope.tasks.length;i++){
					var item=$scope.tasks[i];
					if(!item.completed){
						count++;
					}
				}
				return count;
			}

			// 功能八 $watch方法	?????????????????????????????
			// $scope.$watch("tasks",function(now,old){

			// },true)
			
			// 功能九 Active只显示未完成的任务
			// $scope.active=function(){
			// 	var temp=[];
			// 	for(var i=0;i<$scope.tasks.length;i++){
			// 		var item=$scope.tasks[i];
			// 		if(!item.completed){
			// 			temp.push(item);
			// 		}
			// 	}
			// 	$scope.tasks=temp;
			// }


			// 通过filter过滤器来控制不同状态的显示与否
			$scope.isCompleted={};
			$scope.active=function(){
				$scope.isCompleted={completed:false}
			}
			$scope.completed=function(){
				$scope.isCompleted={completed:true}
			}
			$scope.all=function(){
				$scope.isCompleted={}
			}


			// 切换样式 按钮的样式改变
			
	}])
})(angular);
