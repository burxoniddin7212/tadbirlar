




const LOGIN = `
SELECT 
*
FROM
admins as a
WHERE login=$1 and parol=crypt($2, a.parol) and status='active'
`


export {
   LOGIN
}