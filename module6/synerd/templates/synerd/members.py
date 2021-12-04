#!C:/Python/Python39/python
import re
import mysql.connector, cgi

hostname = 'localhost'
username = 'root2'
password = 'moomoo'
database = 'synerd'
form = cgi.FieldStorage()

search = form.getvalue('searchInput')

print("Content-Type: text/html\n\n")


myConnection = mysql.connector.connect(host=hostname, user=username, passwd=password, db=database)
mycursor = myConnection.cursor()

mycursor.execute("SELECT " + search + " FROM backend_subscriber")
myresult = mycursor.fetchall()

for x in myresult:
    print(x)

mycursor.close()
