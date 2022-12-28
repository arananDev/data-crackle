import {
    Stack,
    Link,
    Text,
    LinkProps
  } from '@chakra-ui/react';

  
  const Footer = () => {
    return (
     
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
          <Text fontSize="md">
            Built by{' '}
            <Link
              href="https://github.com/arananDev"
              textDecoration="underline"
              _hover={{ textDecoration: 'underline' }}
              isExternal
            >
              Aranan Wijayasooria
            </Link>
          </Text>
        </Stack>
    );
  };
  
  const CustomLink = ({ children, ...props }: LinkProps) => {
    return (
      <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
        {children}
      </Link>
    );
  };
  
  export default Footer;