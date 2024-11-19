import type { ButtonProps } from "@chakra-ui/react";
import { Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import {Button as AntdButton} from "antd"
import { useWeb3React } from "@src/hooks/useWeb3React";
import WalletModal from "../WalletModal";


const ButtonConnectWallet: React.FC<
  ButtonProps & {
    isShortText?: boolean;
  }
> = ({ children, className, isShortText = false, ...rest }) => {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");

  const { account } = useWeb3React();
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (!account) {
    return (
      <>
        <AntdButton
          onClick={onOpen}
          className="custom-button"
        >
          {isMobileScreen || isShortText ? "Connect" : "Connect Wallet"}
        </AntdButton>
        <WalletModal isOpen={isOpen} onDismiss={onClose} />
      </>
    );
  }
  return <>{children}</>; 
};

export default ButtonConnectWallet;
