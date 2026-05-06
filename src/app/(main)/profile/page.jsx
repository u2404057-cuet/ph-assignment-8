"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const { register, handleSubmit } = useForm();

  const handleUpdateUser = async (data) => {
    const { name, photo } =  data;
    const { data: updatedData, error } = await authClient.updateUser({
      image: photo,
      name: name,
    });

    console.log(updatedData, error);
    console.log(name, photo);
    console.log(user);
    // window.location.reload();
  };

  //   console.log(user);
  return (
    <div className="container max-w-180 min-h-100 border mx-auto flex flex-col md:flex-row items-center gap-5 my-20 bg-gray-200 rounded-2xl">
      {isPending ? (
        <div className="flex justify-center items-center text-center w-full">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <>
          <div className="p-5">
            <Image
              src={user?.image}
              alt={user?.name}
              width={400}
              height={400}
              className="rounded-2xl"
            ></Image>
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold">{user?.name}</p>
            <p className="">Email: {user?.email}</p>
            <Modal>
              <Button variant="" className="btn">
                Open Contact Form
              </Button>
              <Modal.Backdrop>
                <Modal.Container placement="auto">
                  <Modal.Dialog className="sm:max-w-md">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                        <Envelope className="size-5" />
                      </Modal.Icon>
                      <Modal.Heading>Contact Us</Modal.Heading>
                      <p className="mt-1.5 text-sm leading-5 text-muted">
                        Fill out the form below and we will get back to you. The
                        modal adapts automatically when the keyboard appears on
                        mobile.
                      </p>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                      <Surface variant="default">
                        <form
                          className="card bg-base-100 w-full max-w-sm"
                          onSubmit={handleSubmit(handleUpdateUser)}
                        >
                          <h1 className="font-bold text-2xl text-center mt-4 bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            Update info
                          </h1>
                          <div className="card-body">
                            <fieldset className="fieldset">
                              <label className="label">Name</label>
                              <input
                                type="text"
                                className="input"
                                placeholder="Name"
                                name="name"
                                {...register("name")}
                              />
                              <label className="label">Photo</label>
                              <input
                                type="text"
                                className="input"
                                placeholder="Photo"
                                name="photo"
                                {...register("photo")}
                                required
                              />
                            </fieldset>
                          </div>
                          <Modal.Footer>
                            <Button slot="close" variant="secondary">
                              Cancel
                            </Button>
                            <Button type="submit">Update</Button>
                          </Modal.Footer>
                        </form>
                      </Surface>
                    </Modal.Body>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
