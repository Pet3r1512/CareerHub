import Loading from "@/assets/_UI/loading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { TOTP } from "totp-generator";
import React, { useState } from "react";

export default function OtpDialog({
  mutation,
  formState,
  setValidOTP,
}: {
  mutation: any;
  formState: any;
  setValidOTP: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [otp, setOtp] = useState("");
  const [inputOTP, setInputOTP] = useState("");
  const [open, setOpen] = useState(false);

  const { isValid, isDirty } = formState;
  const isNotSubmittable = !!isValid && !!isDirty;

  function generateOTP() {
    setOtp("");
    const { otp } = TOTP.generate("JBSWY3DCAREERHUBPEHPK3PXP");
    setOtp(otp);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        onClick={() => {
          generateOTP();
        }}
      >
        <Button
          disabled={!isNotSubmittable}
          className="bg-white border-2 border-primary text-primary hover:bg-white hover:text-primary"
        >
          Send OTP
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>OTP Validation</DialogTitle>
          <DialogDescription>
            OTP has been sent to your email!{" "}
            <span className="text-gray-light">{otp}</span>
          </DialogDescription>
        </DialogHeader>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={inputOTP}
          onChange={(value) => {
            setInputOTP(value);
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <DialogFooter>
          <Button
            onClick={() => {
              if (inputOTP === otp) {
                setValidOTP(true);
                setInputOTP("");
                setOpen(false);
              }
            }}
            disabled={mutation.isLoading}
            className="w-fit px-4 py-3 rounded-lg text-white mt-6"
          >
            Confirm
            {mutation.isLoading ? <Loading className="text-white" /> : ""}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
