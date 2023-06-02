import { Avatar, Box, Button, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import withAuth from "../../../middleware/withAuth";

const ProfileDetails = ()=> {
  return (
    <>
      <div className="max-w-2xl mx-auto py-6 lg:px-8">
        <div className="sm:px-0 lg:flex md:flex sm:block">
          <Box className='mx-auto text-center'>
            <Box component='div' className='flex'>
              <Box component='div' >
                <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src="https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1" />
              </Box>
              <Box component='div' className='p-12'>
                <Typography variant='h5'>
                  SHAKIL HOSSAIN
                </Typography>
                <Typography variant='body2'>
                  IT Asst.
                </Typography>
                <Typography variant='body2'>
                  Hi there. I am a web design and developer. I am looking for support from the community.
                </Typography>
              </Box>
            </Box>
            <Box component='div' className='mx-4 flex justify-end' >
              <Button variant='contained' className='bg-blue-700 px-6 mx-2'>Message</Button>
              <Button variant='contained' className='text-blue-700 px-6 mx-2 hover:text-blue-200'>Share</Button>
            </Box>
            <Table sx={{ maxWidth: '700px', marginTop: 7 }}>
              <TableBody>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Shakil Hossain</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone</TableCell>
                  <TableCell>+8801632706439</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>shakilhossen307@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell>Dhaka, Bangladesh.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </div>
      </div>

    </>
  )
}

export default withAuth(ProfileDetails)
