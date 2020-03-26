(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{274:function(a,t,e){"use strict";e.r(t);var r=e(19),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"힙-정렬-heap-sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#힙-정렬-heap-sort"}},[a._v("#")]),a._v(" 힙 정렬 (Heap Sort)")]),a._v(" "),e("p",[e("em",[a._v("written by sohyeon, hyemin 💡")])]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"_1-힙-heap-이란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-힙-heap-이란"}},[a._v("#")]),a._v(" 1. 힙(Heap)이란?")]),a._v(" "),e("p",[e("code",[a._v("힙(Heap)")]),a._v("은 여러 개의 값들 중에서 최댓값이나 최솟값을 빠르게 찾아내도록 만들어진 자료 구조이다.")]),a._v(" "),e("p",[a._v("즉. "),e("code",[a._v("힙(Heap)")]),a._v("은 부모 노드의 키 값이 자식 노드의 키 값보다 항상 큰(작은) 완전 이진 트리를 말한다.")]),a._v(" "),e("h3",{attrs:{id:"최대-힙-max-heap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#최대-힙-max-heap"}},[a._v("#")]),a._v(" 최대 힙(Max Heap)")]),a._v(" "),e("p",[a._v("부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리를 말한다.")]),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/MaxHeap.png",height:"300px"}}),a._v(" "),e("h3",{attrs:{id:"최소-힙-min-heap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#최소-힙-min-heap"}},[a._v("#")]),a._v(" 최소 힙(Min Heap)")]),a._v(" "),e("p",[a._v("부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리를 말한다.")]),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/MinHeap.png",height:"300px"}}),a._v(" "),e("h3",{attrs:{id:"힙의-요소를-배열에-저장하는-과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#힙의-요소를-배열에-저장하는-과정"}},[a._v("#")]),a._v(" 힙의 요소를 배열에 저장하는 과정")]),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/MaxHeap.png",height:"300px"}}),a._v(" "),e("p",[e("code",[a._v("9 => 7 => 6 => 5 => 4 => 3 => 2 => 2 => 1=> 3")]),a._v(" 와 같이 인덱스의 값을 1씩 늘리면서 배열의 각 요소에 힙의 요소를 대입한다.")]),a._v(" "),e("h4",{attrs:{id:"부모와-자식의-인덱스-관계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#부모와-자식의-인덱스-관계"}},[a._v("#")]),a._v(" 부모와 자식의 인덱스 관계")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. 부모는 a[(i-1)/2]\n2. 왼쪽 자식은 a[i*2+1]\n3. 오른쪽 자식은 a[i*2+2]\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"_2-힙-정렬이란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-힙-정렬이란"}},[a._v("#")]),a._v(" 2. 힙 정렬이란?")]),a._v(" "),e("p",[e("code",[a._v("힙 정렬(Heap Sort)")]),a._v("은 "),e("code",[a._v("가장 큰(작은) 값이 루트에 위치")]),a._v("하는 특징을 이용하는 정렬 알고리즘이다.")]),a._v(" "),e("p",[a._v("힙 정렬은 "),e("code",[a._v("선택 정렬을 응용")]),a._v("한 알고리즘이며 힙에서 가장 큰(작은) 값인 루트를 꺼내고 남은 요소에서 다시 가장 큰(작은) 값을 구해야 한다."),e("br"),a._v("\n따라서 루트를 꺼내고 남은 요소로 만든 트리도 힙의 형태를 유지할 수 있도록 재구성해야 한다.")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"_3-동작-방식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-동작-방식"}},[a._v("#")]),a._v(" 3. 동작 방식")]),a._v(" "),e("h3",{attrs:{id:"루트를-없애고-힙-상태-유지하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#루트를-없애고-힙-상태-유지하기"}},[a._v("#")]),a._v(" 루트를 없애고 힙 상태 유지하기")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. 루트를 꺼낸다.\n2. 마지막 요소를 루트로 이동한다.\n3. 자기보다 큰 값을 가지는 자식 요소와 자리를 바꾸며 아래쪽으로 내려가는 작업을 반복한다. 이때 자식의 값이 작거나 잎에 다다르면 작업이 종료된다.\n")])])]),e("h3",{attrs:{id:"힙-정렬의-과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#힙-정렬의-과정"}},[a._v("#")]),a._v(" 힙 정렬의 과정")]),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/heapsort_1.png",height:"300px"}}),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/heapsort_2.png",height:"300px"}}),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/heapsort_3.png",height:"300px"}}),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/heapsort_4.png",height:"300px"}}),a._v(" "),e("img",{attrs:{src:"/images/Algorithms/resources/heapsort_5.png",height:"300px"}}),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. 힙의 루트(a[0])에 있는 가장 큰 값을 꺼내 배열 마지막 요소(a[9])와 바꾼다. \n2. 가장 큰 값을 a[9]로 옮기면 a[9]는 정렬을 마치게 된다. 앞에서 살펴본 순서대로 a[0]~a[8]의 요소를 힙으로 만든다. 그 결과 두 번째로 큰 요소인 9가 루트에 위치하게 된다. 힙의 루트 a[0]에 있는 가장 큰 값인 9를 꺼내 아직 정렬하지 않은 부분의 마지막 요소인 a[8]과 바꾼다.\n3. 두 번째로 큰 값을 a[8]로 옮기면 a[8]~a[9]는 정렬을 마치게 된다. 그런 다음 a[0]~a[7]의 요소를 힙으로 만든다. 그 결과 세 번째로 큰 요소인 8이 루트에 위치하게 된다. 힙의 루트 a[0]에 있는 가장 큰 값인 8을 꺼내 아직 정렬하지 않은 부분의 마지막 요소인 a[7]과 바꾼다.\n")])])]),e("ul",[e("li",[a._v("이 과정을 적용하기 전에 배열을 힙 상태로 만들어야 한다.  또한, 정렬을 마치게 된다면, 정렬하지 않은 부분의 요소를 힙으로 만들어야한다.")])]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"_4-특징"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-특징"}},[a._v("#")]),a._v(" 4. 특징")]),a._v(" "),e("h3",{attrs:{id:"_1-장점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-장점"}},[a._v("#")]),a._v(" 1) 장점")]),a._v(" "),e("ul",[e("li",[a._v("시간 복잡도가 좋은 편이다.")]),a._v(" "),e("li",[a._v("힙 정렬이 유용할 때는 전체 자료를 정렬하는 것이 아니라 "),e("code",[a._v("가장 큰(작은) 값 일부만 필요할 때")]),a._v("이다.")])]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"_5-시간복잡도"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-시간복잡도"}},[a._v("#")]),a._v(" 5. 시간복잡도")]),a._v(" "),e("ul",[e("li",[a._v("힙 트리의 전체 높이가 거의 "),e("code",[a._v("log2(n)")]),a._v("(완전이진트리)이므로 하나의 요소를 힙에 삽입하거나 삭제할 때 힙을 재정비하는 시간 "),e("code",[a._v("log2(n)")]),a._v("만큼 소요된다.")]),a._v(" "),e("li",[a._v("요소의 개수가 n개이므로 전체적으로 "),e("code",[a._v("O(nlog2(n))")]),a._v("의 시간이 걸린다.")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("T(n) = O(nlog2(n))\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"_6-힙-정렬-java-코드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-힙-정렬-java-코드"}},[a._v("#")]),a._v(" 6. 힙 정렬 Java 코드")]),a._v(" "),e("h4",{attrs:{id:"ex-힙-정렬-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ex-힙-정렬-예제"}},[a._v("#")]),a._v(" ex) 힙 정렬 예제")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('import java.util.Scanner;\n\n// 힙 정렬\nclass HeapSort {\n    // 배열 요소 a[id1]과 a[id2]의 값을 바꾼다.\n    static void swap(int[] a, int id1, int id2) {\n        int t = a[id1];\n        a[id1] = a[id2];\n        a[id2] = t;\n}\n\n    // a[left] ~ a[right]를 힙으로 만든다.\n    static void downHeap(int[] a, int left, int right) {\n        int temp = a[left];  // 루트\n        int child;           // 큰 값을 가진 노드\n        int parent;          // 노드\n\n        for(parent = left; parent < (right+1)/2; parent = child) {\n            int cl = parent * 2 + 1;  // 왼쪽 자식\n            int cr = cl + 1;          // 오른쪽 자식\n            child = (cr <= right && a[cr] > a[cl]) ? cr : cl; // 큰 값을 가진 노드를 자식에 대입\n            if(temp >= a[child])\n                break;\n            a[parent] = a[child];\n        }\n        a[parent] = temp;\n    }\n\n    // 힙 정렬\n    static void heapSort(int[] a, int n) {\n        for(int i = (n-1)/2; i>=0; i--)   // a[i]~a[n-1]를 힙으로 만들기\n            downHeap(a, i, n-1);\n\n        for(int i = n-1; i>0; i--) {\n            swap(a,0,i);   // 가장 큰 요소와 아직 정렬되지 않은 부분의 마지막 요소를 반환한다.\n            downHeap(a, 0, i-1);   // a[0]~a[i-1]을 힙으로 만든다.\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner scan = new Scanner(System.in);\n\n        System.out.println("힙 정렬");\n        System.out.println("요솟수 : ");\n        int n = scan.nextInt();\n        int[] x = new int[n];\n\n        for(int i = 0; i<n; i++) {\n            System.out.print("x["+i+"] : ");\n            x[i] = scan.nextInt();\n        }\n\n        heapSort(x, n); // 배열 x를 힙 정렬한다. \n\n        System.out.println("오름차순으로 정렬했습니다.");\n        for(int i = 0; i<n; i++)\n            System.out.println("x["+i+"] = "+x[i]);\n    }\n}\n')])])]),e("h4",{attrs:{id:"downheap-메서드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#downheap-메서드"}},[a._v("#")]),a._v(" downHeap 메서드")]),a._v(" "),e("p",[a._v("배열 a 가운데 a[left]~a[right]의 요소를 힙으로 만드는 메서드이다. a[left] 이외에는 모두 힙 상태라고 가정하고 a[left]를 아랫부분의 알맞은 위치로 옮겨 힙 상태를 만든다.")]),a._v(" "),e("h4",{attrs:{id:"heapsort-메서드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heapsort-메서드"}},[a._v("#")]),a._v(" heapSort 메서드")]),a._v(" "),e("p",[a._v("요소의 개수가 n개인 배열 a를 힙 정렬하는 메서드이다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. downHeap 메서드를 사용하여 배열 a를 힙으로 만든다.\n2. 루트에 있는 가장 큰 값을 빼내어 배열 마지막 요소와 바꾸고 배열의 나머지 부분을 다시 힙으로 만드는 과정을 반복하여 정렬을 수행한다. \n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"reference-additional-resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[a._v("#")]),a._v(" Reference & Additional Resources")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Do it! 자료구조와 함께 배우는 알고리즘 입문 자바편")])]),a._v(" "),e("li",[e("p",[a._v("C언어로 쉽게 풀어쓴 자료 구조")])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/05/10/algorithm-heap-sort.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("[알고리즘] 힙 정렬(heap sort)이란"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=s.exports}}]);