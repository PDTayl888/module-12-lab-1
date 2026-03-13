What is the difference between res.send() and res.sendFile()? When would you use one over the other?
===========================
res.send is the general method to send raw data of any type while res.sendfile expects a file with an extension such as .js or .html

Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
============================
Because the file might not be in public/index.html    __dirname automatically finds the correct path

How would you add a third page (e.g., a menu page) to this server? What steps would you take?
============================
the same way I defined the contact page with the name of the page after the /