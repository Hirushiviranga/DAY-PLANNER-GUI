   M S B A M L   `   `   `  ����  DataBaseApp    DataBaseApp.TaskWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Task Window��5   	   $	��350��6   $	��400��6*    � WindowStyle$
 None=�5   	    � AllowsTransparency$
 True��6   
������ .��5      � ��5   
   �� 5	       �� ImageSource$ /Images/image2.jpg��6    j� Stretch$ UniformToFill=�6:   .+�5   
   �� ���	#80FFFFFF �� CornerRadius$ 10��6(   $��20,20,20,20q�6:    �� Padding$ 10q�6O   ._�5      �  � RowDefinitions 5      �� 5      $
��Auto �6$   �� 5      $
��Auto �6$   �� 5      $
��Auto �6$   �� 5      $
��Auto �6$   �� 5      $��* �6$    � ColumnDefinitions 5      �� 5      $
��Auto �6'   �� 5      $��* �6'   .+�5      �� $��Add Your Task Here��6   $��20(�66   $
��Bold"�6D   $��Center=�5      $��2��69   $��0,0,0,10q�6M   �� 5       $��
Task Name:��6   $��5q�6.   $��1��69   $��0��6F   $
��Bold"�6V   �� 5!      -   5        	 ��Name$	 NameTextBox��5!      $��5q�6/   $��1��6:   $��1��6G   ���	#E0FFFFFF6W   �� 5#      $��Date:��6   $��5q�6)   $��2��64   $��0��6A   $
��Bold"�6Q   (  "System.Windows.Controls.DatePicker  5$      -   5        
  Name$
 
DatePicker��5$      $��7,5,5,10q�61   $��2��6C   $��1��6P   ���	#E0FFFFFF6`   �� 5&      $��Time:��6   $��5q�6)   $��3��64   $��0��6A   $
��Bold"�6Q   �� 5'      -   5        $	 TimeTextBox��5'      $��5q�6/   $��3��6:   $��1��6G   ���	#E0FFFFFF6W   �� 5)      $��4��6   $��1��6*    �� Orientation$ 
Horizontal=�6:   $��Right=�6S   $��	0,110,0,0q�6o   .+�5*      �� -   5        $
��Save��5*      $	��100��6,   $��5q�68   
���������5+      �� 5,       �� 
StartPoint$	 0,0&�62    �� EndPoint$	 1,1&�6C   .��5-   "   �  � Color$ DarkBlue��6/    � Offset$	 0.0Q�6@   � 5/   "   $ Silver��6/   $	 1.0Q�6>   51      53      �� 54      -   5        $��Cancel��54      $	��100��6.   $��5q�6:   ��55      �� 56      $	 0,0&�62   $	 1,1&�6C   .��57   "   � $ DarkBlue��6/   $	 0.0Q�6@   � 59   "   $ Silver��6/   $	 1.0Q�6>   5;      5=      5>      5?      5@      5A      5B      