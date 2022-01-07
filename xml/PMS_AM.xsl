<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>PMS AM XML</title>
                <style>
                    @font-face {
                        font-family: 'Montserrat';
                        src: url("../frontend/font/Montserrat-Regular.ttf");
                    }
                    *{
                        margin: 0;
                        padding: 0;
                    }
                    body{
                        background-color: #f9f9f9;
                        font-family: 'Montserrat';
                    }
                    h1{
                        text-align: center;
                        color: white;
                        background-color: #333333;
                        padding:1%;
                    }
                    h2{
                        margin:2% 5%;
                    }
                    table{
                        background-color: #e3e3e3;
                        margin:2% 5%;
                        width:90%;
                    }
                    td, th{
                        text-align:left;
                        padding:2%;
                    }
                </style>
            </head>
            <body>
                <h1>Admin Management</h1>
                <h2>Employee</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Experience</th>
                    </tr>
                    <xsl:for-each select="user/employee">
                    <xsl:sort select="name"/>
                    <xsl:if test="experience &gt; 20">
                        <tr>
                            <td><xsl:value-of select="id"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="email"/></td>
                            <td><xsl:value-of select="phone"/></td>
                            <td><xsl:value-of select="role"/></td>
                            <td><xsl:value-of select="experience"/> years</td>
                        </tr>
                    </xsl:if>
                    </xsl:for-each>
                </table>
                <h2>Client</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                    </tr>
                    <xsl:for-each select="user/client">
                    <xsl:sort select="name"/>
                    <xsl:choose>
                        <xsl:when test="age &gt; 20">
                            <tr style="background-color:blueviolet;">
                                <td><xsl:value-of select="id"/></td>
                                <td><xsl:value-of select="name"/></td>
                                <td><xsl:value-of select="email"/></td>
                                <td><xsl:value-of select="phone"/></td>
                                <td><xsl:value-of select="age"/> years</td>
                            </tr>
                        </xsl:when>
                        <xsl:otherwise>
                            <tr>
                                <td><xsl:value-of select="id"/></td>
                                <td><xsl:value-of select="name"/></td>
                                <td><xsl:value-of select="email"/></td>
                                <td><xsl:value-of select="phone"/></td>
                                <td><xsl:value-of select="role"/></td>
                                <td><xsl:value-of select="age"/> years</td>
                            </tr>
                        </xsl:otherwise>
                    </xsl:choose>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>